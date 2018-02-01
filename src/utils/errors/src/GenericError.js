const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    GenericError:
 *      type: object
 *      properties:
 *          statusCode:
 *              type: number
 *              default: 500
 *          success:
 *              type: boolean
 *              default: false
 *          error:
 *              type: string
 *              default: "Undefined"
 */
class GenericError {
  constructor(statusCode = HTTPStatus.INTERNAL_SERVER_ERROR, errorsList = 'Undefined') {
    this.statusCode = statusCode;
    this.errorsList = errorsList;
  }

  getError() {
    return {
      statusCode: this.statusCode,
      success: false,
      error: this.errorsList,
    };
  }
}

module.exports = GenericError;
