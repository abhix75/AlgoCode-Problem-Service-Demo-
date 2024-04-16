const express = require("express");

const ProblemRoutes = require("./problems.routes");

const V1Router = express.Router();

V1Router.use("/problems", ProblemRoutes);

module.exports = V1Router;
