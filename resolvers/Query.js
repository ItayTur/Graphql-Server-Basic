module.exports = {
  sessions: (parent, args, { dataSources }, info) =>
    dataSources.sessionsAPI.getSessions(args),
  sessionById: (parent, { id }, { dataSources }, info) => {
    try {
      return dataSources.sessionsAPI.getSessionById(id);
    } catch (error) {
      return {
        code: "ERROR",
        message: "Cannot get session by id",
        token: "some-token",
      };
    }
  },
  speakers: (parent, args, { dataSources }, info) =>
    dataSources.speakersAPI.getSpeakers(args),
  speakerById: (parent, { id }, { dataSources }, info) =>
    dataSources.speakersAPI.getSpeakerById(id),
};
