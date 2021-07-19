import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

// many to many relationship between user and posts
// multiple records in users are associated with multiple records in posts

@Entity()
export class Upvote extends BaseEntity {
   @Column({ type: "int" })
   value: number;

   @PrimaryColumn()
   userId: number;

   @PrimaryColumn()
   postId: number;

   @ManyToOne(() => User)
   user: User;

   @ManyToOne(() => Post)
   post: Post;
}
