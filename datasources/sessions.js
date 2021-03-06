const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class SessionsApi extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    return _.filter(sessions, { id: parseInt(id) })[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) })[0];
    session.favorite = !session.favorite;
    return session;
  }

  addSession(session) {
    session.id = Math.floor(1 + Math.random() * 100000);
    sessions.push(session);
    return session;
  }
}

module.exports = SessionsApi;
