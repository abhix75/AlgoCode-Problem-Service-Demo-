const express = require('express');

const V1Router = require('./v1/index');

const apiRoutes = express.Router();
// If any request comes and route continues with /v1, we map it to v1Router
apiRoutes.use('/v1',V1Router);

module.exports = apiRoutes;