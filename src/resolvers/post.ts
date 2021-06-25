import { Resolver, Query, Ctx } from "type-graphql"
import { Post } from "../entities/Post"; 
import { MyContext } from "../types"

@Resolver()
export class PostResolver {
   @Query(() => [Post]) //Graphql type
   // {em} instead of ctx for destructuring
   posts(@Ctx() {em}: MyContext): Promise<Post[]> { //ts type
      return em.find(Post, {}); 
   }
}
