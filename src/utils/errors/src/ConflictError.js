const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    ConflictError:
 *      type: object
 *      properties:
 *          statusCode:
 *              type: number
 *              default: 409
 *          success:
 *              type: boolean
 *              default: false
 *          error:
 *              type: string
 *              default: "Conflict"
 */
class ConflictError extends GenericError {
  constructor(error = 'Conflict') {
    super(HTTPStatus.CONFLICT, error);
  }
}

module.exports = ConflictError;
