const { ApolloError } = require("apollo-server");
const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }, info) {
    try {
      const allSpeakers = await dataSources.speakersAPI.getSpeakers();
      const speakersToReturn = allSpeakers.filter(
        (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0
      );
      return speakersToReturn;
    } catch (error) {
      throw new ApolloError("Unable to get speakers", "SPEAKERS_API_ERRORS", {
        token: "Some token",
      });
    }
  },
};
