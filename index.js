const express = require('express')
const { config } = require('./config/index.js');

const app = express()

// Cors middleware
const cors = require('cors');
app.use(cors())

// Middleware body parser
app.use(express.json());

// Routes
const campaignRoutes = require('./routes/campaigns.js')

campaignRoutes(app)


// Helmet Middleware
const helmet = require('helmet');
app.use(helmet);


app.listen(config.port, function () {
    console.log(`Listening in http://localhost:${config.port}`);
});
