import "reflect-metadata"
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config"
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql' 
import { HelloResolver } from "./resolvers/hello"
import { PostResolver } from "./resolvers/post"
import { UserResolver } from "./resolvers/user";
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis'
import { MyContext } from './types'

const main = async () => {
   const orm = await MikroORM.init(microConfig);
   await orm.getMigrator().up(); // Automatically run migration

   const app = express();

   const RedisStore = connectRedis(session)
   const redisClient = redis.createClient()

   app.use(
      session({
         name: 'qid',
         store: new RedisStore({ 
            client: redisClient,
            disableTouch: true, // keeps session alive indefinitely
         }),
         cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
            httpOnly: true, // js frontend cant access cookie
            sameSite: 'lax', // protect csrf
            secure: __prod__, // cookie only works in https
         },
         saveUninitialized: false,
         secret: 'randomstring',
         resave: false
      })
      // session middleware runs before/inside apollo middleware
   )

   const apolloServer = new ApolloServer({
      schema: await buildSchema({
         resolvers: [HelloResolver, PostResolver, UserResolver],
         validate: false
      }), 
      // allows us to access sessions inside of our resolvers
      context: ({req, res}): MyContext => ({ em: orm.em, req, res })
   })

   apolloServer.applyMiddleware({ app });

   app.listen(4000, ()=> {
      console.log('server started on localhost:4000');
   });
}; 

main().catch((err) => {
   console.error(err);
});

console.log("hello world")
