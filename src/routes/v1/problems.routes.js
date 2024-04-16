const express = require("express");
const { ProblemController } = require("../../controllers/index");

const ProblemRoutes = express.Router();
// If any request comes and route continues with /ping, we map it to pingProblemController
ProblemRoutes.get("/ping", ProblemController.pingController);
ProblemRoutes.get("/:id", ProblemController.getProblem);
ProblemRoutes.get("/", ProblemController.getProblems);
ProblemRoutes.post("/", ProblemController.addProblem);
ProblemRoutes.delete("/:id", ProblemController.deleteProblem);
ProblemRoutes.put("/:id", ProblemController.updateProblem);

module.exports = ProblemRoutes;
