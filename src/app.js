const { ApolloServer,gql } = require('apollo-server-express');
const express = require("express");
const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');
require("./db/conn");

const port = process.env.PORT || 8000;


async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app: app});
    
    app.listen(port,() => {
        console.log(`Connection Successfull.. at ${port}`);
    })
}



// app.use(express.json());

// app.post("/weather",(req,res) => {
//     console.log(req.body);
//     // res.send("Hello from the Sahil");
// })





startServer();