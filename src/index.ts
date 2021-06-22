import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
   // This interacts with database and returns a 
   // promise so we await it
   const orm = await MikroORM.init({
      dbName: 'reddit',
      type: 'postgresql', 
      debug: !__prod__
   }); 
}

main()

console.log("hello world")
