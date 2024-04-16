const express = require("express");

const ProblemRoutes = require("./problems.routes");

const V1Router = express.Router();
// If any request comes and route continues with /problems, we map it to ProblemRoutes
V1Router.use("/problems", ProblemRoutes);

module.exports = V1Router;
