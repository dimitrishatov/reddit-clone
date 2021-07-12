import { ObjectType, Field } from "type-graphql";
import {
   Column,
   CreateDateColumn,
   Entity,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from "typeorm";

// Entity corresponds to a db table
@ObjectType() // Makes this GraphQL Type
@Entity()
export class Post {
   @Field()
   @PrimaryGeneratedColumn()
   id!: number;

   @Field(() => String)
   @CreateDateColumn()
   createdAt: Date;

   @Field(() => String)
   @UpdateDateColumn()
   updatedAt: Date;

   @Field()
   @Column()
   title!: string;
}
