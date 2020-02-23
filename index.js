const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import models from './models';
const { mongoose } = require('./database');
import cors from 'cors';
const PORT = 4000;

const app = express();
app.use(cors({
  origin:["http://localhost:3000"]
}))
//mezclar todos los archivos de carpetas de types y resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const SECRET = "ajhfshflkjfFSDFSjwehrkwjr;qek";
 
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {
    models,
    SECRET,
    user: {
        _id: 1, username: 'bob'
      }
    } 
  });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)