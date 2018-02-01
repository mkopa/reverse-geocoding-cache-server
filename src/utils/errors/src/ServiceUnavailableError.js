const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    ServiceUnavailableError:
 *      type: object
 *      properties:
 *          statusCode:
 *              type: number
 *              default: 503
 *          success:
 *              type: boolean
 *              default: false
 *          error:
 *              type: string
 *              default: "Service unavailable"
 */
class ServiceUnavailableError extends GenericError {
  constructor(message = 'Service unavailable') {
    super(HTTPStatus.SERVICE_UNAVAILABLE, message);
  }
}

module.exports = ServiceUnavailableError;
