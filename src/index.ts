import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolver/UserResolver";

createConnection().then(async () => {
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        })
    });

    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("Express server started at localhost:4000");
    });

}).catch(error => console.log(error))
