const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class BadRequest extends BaseError {
  constructor(propertyName, details) {
    console.log("BAD_REQUEST")
    super("BAD_REQUEST",StatusCodes.BAD_REQUEST,`Invalid Structure for ${propertyName} Provided`,details );
  }
}

module.exports = BadRequest;
