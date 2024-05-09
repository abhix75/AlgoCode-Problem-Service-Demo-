const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const BadRequest = require("../errors/badRequest.error")
function pingController(req, res) {
  return res.json({
    message: "Problem controller is up",
  });
}
function addProblem(req, res, next) {
  try {
    //BadRequest
    throw new BadRequest('Problem Name', { missing: ["Problem Name"] });
  } catch (error) {
    next(error);
  }
}
function getProblem(req, res) {
  try {
    //NOT-IMplemented
    throw new NotImplementedError('getProblem');
  } catch (error) {
    next(error);
  }
}
function getProblems(req, res) {
  try {
    //NOT-IMplemented
    throw new NotImplementedError('getProblems');
  } catch (error) {
    next(error);
  }
}
function deleteProblem(req, res) {
  try {
    //NOT-IMplemented
    throw new NotImplementedError('deleteProblem');
  } catch (error) {
    next(error);
  }
}
function updateProblem(req, res) {
  try {
    //NOT-IMplemented
    throw new NotImplementedError('updateProblem');
  } catch (error) {
    next(error);
  }
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