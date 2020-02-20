const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import typeDefs from './schemas';
import resolvers from './resolvers';
import models from './models';
const { mongoose } = require('./database');

const PORT = 4000;

const app = express();

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!'
//   },
// };

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {
    models
    } 
  });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)