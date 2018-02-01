const GenericError = require('./GenericError');
const HTTPStatus = require('http-status');

/**
 * An error indicating lack of authorization. Passed to client as HTTP 401 Unauthorized error.
 * @swagger
 * definitions:
 *   UnauthorizedError:
 *     type: object
 *     properties:
 *       statusCode:
 *         type: number
 *         enum: [401]
 *       success:
 *         type: boolean
 *         enum: [false]
 *       error:
 *         type: string
 *         default: "Unauthorized"
 */
class UnauthorizedError extends GenericError {
  /**
   * Create an error.
   * @param {string} error - An error message text.
   * @param {string} authenticationType - Authentication type. A common type is "Basic".
   * List is avalable at https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml
   * @param {string} realm - A description of the protected area.
   */
  constructor(error = 'Unauthorized', authenticationType, realm) {
    super(HTTPStatus.UNAUTHORIZED, error);
    this.authenticationType = authenticationType;
    this.realm = realm;
  }
}

module.exports = UnauthorizedError;
