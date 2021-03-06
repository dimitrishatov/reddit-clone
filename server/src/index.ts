import "reflect-metadata";
import { COOKIE_NAME, __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";
import { Upvote } from "./entities/Upvote";
import { createUserLoader } from "./utils/createUserLoader";
import { createUpvoteLoader } from "./utils/createUpvoteLoader";

const main = async () => {
	const conn = await createConnection({
		type: "postgres",
		database: "reddit2",
		username: "postgres",
		password: "postgres",
		logging: true,
		synchronize: true,
		migrations: [path.join(__dirname, "./migrations/*")],
		entities: [Post, User, Upvote],
	});
	await conn.runMigrations();

	const app = express();

	const RedisStore = connectRedis(session);
	const redis = new Redis();

	app.use(
		cors({
			// we are applying this middleware to all routes
			origin: "http://localhost:3000",
			credentials: true,
		})
	);

	app.use(
		session({
			name: COOKIE_NAME,
			store: new RedisStore({
				client: redis,
				disableTouch: true, // keeps session alive indefinitely
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
				httpOnly: true, // js frontend cant access cookie
				sameSite: "lax", // protect csrf
				secure: __prod__, // cookie only works in https
			},
			saveUninitialized: false,
			secret: "randomstring",
			resave: false,
		})
		// session middleware runs before/inside apollo middleware
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver, PostResolver, UserResolver],
			validate: false,
		}),
		// allows us to access sessions inside of our resolvers
		context: ({ req, res }) => ({
			req,
			res,
			redis,
			userLoader: createUserLoader(), // batches and caches loading of users within single request
			upvoteLoader: createUpvoteLoader(),
		}),
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(4000, () => {
		console.log("server started on localhost:4000");
	});
};

main().catch((err) => {
	console.error(err);
});

console.log("hello world");
