const Query = require("./Query");
const Session = require("./Session");
const Mutation = require("./Mutation");

const resolvers = {
  Query,
  Session,
  Mutation,
  SessionOrError: {
    __resolveType(obj) {
      if (obj.code) {
        return "Error";
      }
      return "Session";
    },
  },
};

module.exports = resolvers;
