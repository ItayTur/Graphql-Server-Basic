const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }, info) {
    const allSpeakers = await dataSources.speakersAPI.getSpeakers();
    const speakersToReturn = allSpeakers.filter(
      (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0
    );
    return speakersToReturn;
  },
};
