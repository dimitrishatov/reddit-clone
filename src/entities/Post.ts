import { Entity, PrimaryKey, Property } from "@mikro-orm/core"; 

// Entity corresponds to a db table
@Entity()
export class Post {
   // Properties  correspond to columns in our db table
   @PrimaryKey()
   id!: number; 

   @Property({ type: "date"  })
   createdAt = new Date(); 

   @Property({ type: "date",  onUpdate: () => new Date() })
   updatedAt = new Date();

   @Property({ type: "text" })
   title!: string;
}
