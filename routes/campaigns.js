const express = require('express')

// Service import
const CampaignsService = require('../services/campaignsService.js')


function campaignsApi(app){
    const router = express.Router();
    app.use('/api/campaigns', router);

    // instance of the service
    const campaignsService = new CampaignsService()

router.get('/', async function(req, res, next) {

    try {
        const campaigns = await campaignsService.getCampaigns()
        res.status(200).json({
            data: campaigns,
            message: "campaigns listed",
        })
    } catch (error) {
        next(error)
    }
})

router.get('/:campaignId', async function(req, res, next) {
    try {
        const {campaignId} = req.params
        const campaign = await campaignsService.getCampaign({campaignId})
        res.status(200).json({
            data: campaign,
            message: "campaign listed",
        })
    } catch (error) {
        next(error)
    }
})

router.post('/', async function(req, res, next) {
    try {
        const {body: campaign} = req;
        const createdCampaignId = await campaignsService.createCampaign({campaign})
        res.status(201).json({
            data: createdCampaignId,
            message: "campaign successfully created",
        })
    } catch (error) {
        next(error)
    }
})

router.put('/:campaignId', async function(req, res, next) {
    try {
        const {campaignId} = req.params;
        const {body: campaign} = req;
        const updatedCampaignId = await campaignsService.updateCampaign({campaignId, campaign})
        res.status(200).json({
            data: updatedCampaignId,
            message: `Campaign ${updatedCampaignId} successfully updated`,
        })
    } catch (error) {
        next(error)
    }
})

router.delete('/:campaignId', async function(req, res, next) {
    try {
        const {campaignId} = req.params;
        const movieDeletedId = await campaignsService.deleteCampaign({campaignId})
        res.status(200).json({
            data: movieDeletedId,
            message: `Campaign ${movieDeletedId} successfully deleted`,
        })
    } catch (error) {
        next(error)
    }
})
}

module.exports = campaignsApi