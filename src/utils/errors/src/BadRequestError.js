const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * @swagger
 * definitions:
 *    BadRequestError:
 *      type: object
 *      properties:
 *          statusCode:
 *              type: number
 *              default: 400
 *          success:
 *              type: boolean
 *              default: false
 *          error:
 *              type: array
 *              items:
 *                $ref: '#/definitions/BadRequestErrorArray'
 *
 *    BadRequestErrorArray:
 *      type: object
 *      properties:
 *          parameter:
 *              type: string
 *              default: "parameter"
 *          message:
 *              type: string
 *              default: "error message"
 *          value:
 *              type: string
 *              default: "value"
 */
class BadRequestError extends GenericError {
  constructor(errorsList) {
    let error = [];
    if (!errorsList || !(errorsList instanceof Array)) {
      error += {
        parameter: '',
        message: 'Undefined',
        value: '',
      };
    } else {
      error = errorsList;
    }
    super(HTTPStatus.BAD_REQUEST, error);
  }
}

module.exports = BadRequestError;
