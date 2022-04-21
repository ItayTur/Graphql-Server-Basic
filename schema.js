const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: Room
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID!): Speaker
  }
  union SessionOrError = Session | Error
  type Error {
    code: String
    message: String
    token: String
  }
  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addSession(session: SessionInput): Session
  }
  enum Room {
    Europa
    Sol
    Saturn
  }
  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions don't fit into one track, will be migrating to tags in the future"
      )
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
`;

module.exports = typeDefs;
