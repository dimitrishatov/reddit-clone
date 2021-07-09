import { Entity, PrimaryKey, Property } from "@mikro-orm/core"; 
import { ObjectType, Field } from "type-graphql"

// Entity corresponds to a db table
@ObjectType() // Makes this GraphQL Type
@Entity()
export class User {
   // Properties  correspond to columns in our db table
   @Field()
   @PrimaryKey()
   id!: number; 

   @Field(() => String)
   @Property({ type: "date"  })
   createdAt = new Date(); 

   @Field(() => String)
   @Property({ type: "date",  onUpdate: () => new Date() })
   updatedAt = new Date();

   @Field()
   @Property({ type: "text", unique: true})
   username!: string;

   @Field()
   @Property({ type: "text", unique: true })
   email!: string;

   @Property({ type: "text"})
   password!: string;
}
