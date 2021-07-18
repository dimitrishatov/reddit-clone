import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

// many to many relationship between user and posts
// multiple records in users are associated with multiple records in posts

@ObjectType()
@Entity()
export class Upvote extends BaseEntity {
   @Column({ type: "int" })
   value: number;

   @Field()
   @PrimaryColumn()
   userId: number;

   @Field()
   @PrimaryColumn()
   postId: number;

   @Field()
   @ManyToOne(() => User, (user) => user.upvotes)
   user: User;

   @Field()
   @ManyToOne(() => Post, (post) => post.upvotes)
   post: Post;
}
