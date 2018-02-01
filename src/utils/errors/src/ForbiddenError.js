const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    ForbiddenError:
 *      type: object
 *      properties:
 *          statusCode:
 *              type: number
 *              default: 401
 *          success:
 *              type: boolean
 *              default: false
 *          error:
 *              type: string
 *              default: "Forbidden"
 */
class ForbiddenError extends GenericError {
  constructor(error = 'Forbidden') {
    super(HTTPStatus.FORBIDDEN, error);
  }
}

module.exports = ForbiddenError;
