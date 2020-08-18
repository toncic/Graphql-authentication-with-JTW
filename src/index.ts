import "reflect-metadata";
// import {createConnection} from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { Query, buildSchema, Resolver } from 'type-graphql';

// import {User} from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

@Resolver()
class Hello {
    @Query(() => String)
    async hello () {
        return "Hello World";
    }
}

(  async () => {
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [Hello]
        })
    });

    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("Express server started at localhost:4000");
    });
})();
