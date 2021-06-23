import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post"

const main = async () => {
   // This interacts with database and returns a 
   // promise so we await it
   const orm = await MikroORM.init({
      entities: [Post],
      dbName: 'reddit',
      type: 'postgresql', 
      debug: !__prod__
   }); 
}

main()

console.log("hello world")
