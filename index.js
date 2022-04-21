const { ApolloServer, gql } = require("apollo-server");
const sessions = require("./data/sessions.json");
const SessionsApi = require("./datasources/sessions");
const SpeakersApi = require("./datasources/speakers");

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers");

const dataSources = () => ({
  sessionsAPI: new SessionsApi(),
  speakersAPI: new SpeakersApi(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server
  .listen({ port: process.env.port || 4000 })
  .then(({ url }) => console.log(`graphql running at ${url}`));
