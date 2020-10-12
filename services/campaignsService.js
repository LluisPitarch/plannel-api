const MongoLib = require('../lib/mongo.js')

class CampaignsService {
    constructor() {
        this.collection = 'campaigns';
        this.mongoDB = new MongoLib();
    }

    async getCampaigns() {
      const query = ""
      const campaigns = await this.mongoDB.getAll(this.collection, query);
      return campaigns;
    }

    async getCampaign({ campaignId }) {
      const query = campaignId;
      const campaign = await this.mongoDB.get(this.collection, query);
      return campaign
    }

    async createCampaign({ campaign }) {
      const createdCampaignId = await this.mongoDB.create(this.collection, campaign);
      return createdCampaignId
    }

    async updateCampaign({ campaignId, campaign}) {
      const updatedCampaignId = await this.mongoDB.update(this.collection, campaignId, campaign);
      return updatedCampaignId
    }

    async deleteCampaign({ campaignId }) {
      const deletedCampaignId = await this.mongoDB.delete(this.collection, campaignId);
      return deletedCampaignId
    }
  }

  module.exports = CampaignsService