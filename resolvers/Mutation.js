module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) =>
    dataSources.sessionsAPI.toggleFavoriteSession(id),
  addSession: (parent, { session }, { dataSources }, info) => {
    return dataSources.sessionsAPI.addSession(session);
  },
};
