const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class NotImplementedError extends BaseError {
    constructor(methodName) {
        console.log("NOT-IMPLEMENTED",StatusCodes.NOT_IMPLEMENTED)
        super( "NOT-IMPLEMENTED",StatusCodes.NOT_IMPLEMENTED, `${methodName} NotImplemented`,{} );
    }
}
module.exports = NotImplementedError;
