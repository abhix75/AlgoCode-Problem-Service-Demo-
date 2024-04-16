const express = require('express');

const V1Router = require('./v1/index');

const apiRoutes = express.Router();

apiRoutes.use('/v1',V1Router);

module.exports = apiRoutes;