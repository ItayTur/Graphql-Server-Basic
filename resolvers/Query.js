module.exports = {
  sessions: (parent, args, { dataSources }, info) =>
    dataSources.sessionsAPI.getSessions(args),
  sessionById: (parent, { id }, { dataSources }, info) =>
    dataSources.sessionsAPI.getSessionById(id),
  speakers: (parent, args, { dataSources }, info) =>
    dataSources.speakersAPI.getSpeakers(args),
  speakerById: (parent, { id }, { dataSources }, info) =>
    dataSources.speakersAPI.getSpeakerById(id),
};
