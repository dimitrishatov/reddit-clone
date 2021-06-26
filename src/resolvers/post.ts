import { Resolver, Query, Ctx, Arg, Int, Mutation } from "type-graphql"
import { Post } from "../entities/Post"; 
import { MyContext } from "../types"

@Resolver()
export class PostResolver {
   // READ ALL POSTS
   @Query(() => [Post]) //Graphql type (can't be inferred)
   // {em} instead of ctx for destructuring
   posts(@Ctx() {em}: MyContext): Promise<Post[]> { //ts type
      return em.find(Post, {}); 
   }

   // READ SINGLE POST BY ID
   @Query(() => Post, {nullable: true}) 
   post(
      @Arg('id') id: number, 
      @Ctx() {em}: MyContext
   ): Promise<Post | null> {
      return em.findOne(Post, { id });
   }

   // CREATE POST 
   @Mutation(() => Post) 
   async createPost(
      @Arg('title') title: string, 
      @Ctx() {em}: MyContext
   ): Promise<Post> {
      const post = em.create(Post, {title})
      await em.persistAndFlush(post)
      return post
   }

   // UPDATE POST
   @Mutation(() => Post, {nullable: true}) 
   async updatePost(
      @Arg('id') id: number, 
      @Arg('title', () => String, { nullable: true }) title: string, 
      @Ctx() {em}: MyContext
   ): Promise<Post | null> {
      const post = await em.findOne(Post, {id})
      if (!post) {
         return null
      }
      if (typeof title !== 'undefined') {
         post.title = title; 
         await em.persistAndFlush(post); 
      }
      return post
   }
}
