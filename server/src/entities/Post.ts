import { ObjectType, Field } from "type-graphql";
import {
   BaseEntity,
   Column,
   CreateDateColumn,
   Entity,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from "typeorm";

// Entity corresponds to a db table
@ObjectType() // Makes this GraphQL Type
@Entity()
export class Post extends BaseEntity {
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
