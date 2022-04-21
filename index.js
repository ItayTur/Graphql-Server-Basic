const { ApolloServer, gql, ApolloError } = require("apollo-server");
const sessions = require("./data/sessions.json");
const SessionsApi = require("./datasources/sessions");
const SpeakersApi = require("./datasources/speakers");

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers");

const dataSources = () => ({
  sessionsAPI: new SessionsApi(),
  speakersAPI: new SpeakersApi(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: false,
  formatError: (error) => {
    if (error.extensions.code === "INTERNAL_SERVER_ERROR") {
      return new ApolloError("We are having some issues", "ERROR");
    }
    return error;
  },
});
server
  .listen({ port: process.env.port || 4000 })
  .then(({ url }) => console.log(`graphql running at ${url}`));
