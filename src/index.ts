require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";
import { Shops } from "./Entities/Shops";
import { Invoices } from "./Entities/Invoice";
import { Items } from "./Entities/Items";
const { HOST, DB_USERNAME, PASSWORD, DATABASE } = process.env;

const main = async () => {
  await createConnection({
    type: "mysql",
    host: HOST,
    database: DATABASE,
    username: DB_USERNAME,
    password: PASSWORD,
    port: 3306,
    logging: true,
    synchronize: false,
    entities: [Users, Shops, Invoices, Items],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());

  //graphql middleware
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(process.env.PORT, () => {
    console.log(`Server runnig on port`, process.env.PORT);
  });
};

main().catch((err) => {
  console.log(err);
});
