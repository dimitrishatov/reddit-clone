import { Entity, PrimaryKey, Property } from "@mikro-orm/core"; 

// Entity corresponds to a db table
@Entity()
export class Post {
   // Properties  correspond to columns in our db table
   @PrimaryKey()
   id!: number; 

   @Property()
   createdAt = new Date(); 

   @Property({ onUpdate: () => new Date() })
   updatedAt = new Date();

   @Property()
   title!: string;
}
