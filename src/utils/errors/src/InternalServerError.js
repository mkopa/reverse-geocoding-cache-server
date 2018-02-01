const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    InternalServerError:
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
 *              default: "Error message"
 */
class InternalServerError extends GenericError {
  constructor(message = 'Undefined') {
    super(HTTPStatus.INTERNAL_SERVER_ERROR, message);
  }
}

module.exports = InternalServerError;
