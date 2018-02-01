const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    NotFoundError:
 *      type: object
 *      properties:
 *          statusCode:
 *              type: number
 *              default: 404
 *          success:
 *              type: boolean
 *              default: false
 *          error:
 *              type: string
 *              default: "Not found"
 */
class NotFoundError extends GenericError {
  constructor(error = 'Not found') {
    super(HTTPStatus.NOT_FOUND, error);
  }
}

module.exports = NotFoundError;
