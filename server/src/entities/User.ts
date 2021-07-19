import { ObjectType, Field } from "type-graphql";
import {
   BaseEntity,
   Column,
   CreateDateColumn,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from "typeorm";
import { Post } from "./Post";
import { Upvote } from "./Upvote";

// Entity corresponds to a db table
@ObjectType() // Makes this GraphQL Type
@Entity()
export class User extends BaseEntity {
   @Field()
   @PrimaryGeneratedColumn()
   id!: number;

   @Field()
   @Column({ unique: true })
   username!: string;

   @Field()
   @Column({ unique: true })
   email!: string;

   @Column()
   password!: string;

   @OneToMany(() => Post, (post) => post.creator)
   posts: Post[];

   @OneToMany(() => Upvote, (upvote) => upvote.user)
   upvotes: Upvote[];

   @Field(() => String)
   @CreateDateColumn()
   createdAt: Date;

   @Field(() => String)
   @UpdateDateColumn()
   updatedAt: Date;
}
