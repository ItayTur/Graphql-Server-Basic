const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakersById() {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getSpeakers() {
    const data = await this.get(`/`);
    return data;
  }
}

module.exports = SpeakersApi;
