const { StatusCodes } = require("http-status-codes");
function pingController(req, res) {
  return res.json({
    message: "Problem controller is up",
  });
}
function addProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    MESSAGE: "Not Implemented",
  });
}
function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    MESSAGE: "Not Implemented",
  });
}
function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    MESSAGE: "Not Implemented",
  });
}
function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    MESSAGE: "Not Implemented",
  });
}
function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    MESSAGE: "Not Implemented",
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingController,
};

/**
 * 
 * res
 * 
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 * 
 */