import { MyContext } from "../types";
import {
   Resolver,
   Query,
   Arg,
   Mutation,
   Field,
   InputType,
   Ctx,
   UseMiddleware,
} from "type-graphql";
import { Post } from "../entities/Post";
import { isAuth } from "../middleware/isAuth";

@InputType()
class PostInput {
   @Field()
   title: string;
   @Field()
   text: string;
}

@Resolver()
export class PostResolver {
   // READ ALL POSTS
   @Query(() => [Post]) //Graphql type (can't be inferred)
   // {em} instead of ctx for destructuring
   posts(): Promise<Post[]> {
      //ts type
      return Post.find();
   }

   // READ SINGLE POST BY ID
   @Query(() => Post, { nullable: true })
   post(@Arg("id") id: number): Promise<Post | undefined> {
      return Post.findOne(id);
   }

   // CREATE POST
   @Mutation(() => Post)
   @UseMiddleware(isAuth)
   async createPost(
      @Arg("input") input: PostInput,
      @Ctx() { req }: MyContext
   ): Promise<Post> {
      return Post.create({
         ...input,
         creatorId: req.session.userId,
      }).save();
   }

   // UPDATE POST
   @Mutation(() => Post, { nullable: true })
   async updatePost(
      @Arg("id") id: number,
      @Arg("title", () => String, { nullable: true }) title: string
   ): Promise<Post | null> {
      const post = await Post.findOne(id);
      if (!post) {
         return null;
      }
      if (typeof title !== "undefined") {
         await Post.update({ id }, { title });
      }
      return post;
   }

   @Mutation(() => Boolean)
   async deletePost(@Arg("id") id: number): Promise<boolean> {
      await Post.delete(id);
      return true;
   }
}
