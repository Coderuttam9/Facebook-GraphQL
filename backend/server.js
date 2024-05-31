import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import colors from "colors";
import dotenv from "dotenv";
import DBconnection from "./config/mongoDB.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

// config dotenv
dotenv.config();

// create port verable
const port = process.env.PORT || 5000;

// server init
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//   server listing
const startServer = async () => {
  await startStandaloneServer(server, { listen: port });
  console.log(
    `server is running on port http//:localhost:${port}`.bgBlue.white
  );
};

//   call server
startServer();
//   call Db form mongodb
DBconnection();
