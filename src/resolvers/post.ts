import { Resolver, Query, Ctx, Arg, Int } from "type-graphql"
import { Post } from "../entities/Post"; 
import { MyContext } from "../types"

@Resolver()
export class PostResolver {
   // READ ALL POSTS
   @Query(() => [Post]) //Graphql type
   // {em} instead of ctx for destructuring
   posts(@Ctx() {em}: MyContext): Promise<Post[]> { //ts type
      return em.find(Post, {}); 
   }

   // READ SINGLE POST BY ID
   @Query(() => Post, {nullable: true}) 
   post(
      @Arg('id', () => Int) id: number, 
      @Ctx() {em}: MyContext
   ): Promise<Post | null> {
      return em.findOne(Post, { id });
   }
}
