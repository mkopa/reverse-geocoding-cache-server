const BadRequestError = require('./src/BadRequestError');
const ConflictError = require('./src/ConflictError');
const ForbiddenError = require('./src/ForbiddenError');
const GenericError = require('./src/GenericError');
const InternalServerError = require('./src/InternalServerError');
const NotFoundError = require('./src/NotFoundError');
const UnauthorizedError = require('./src/UnauthorizedError');
const ServiceUnavailableError = require('./src/ServiceUnavailableError');

module.exports = {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  GenericError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  ServiceUnavailableError,
};
