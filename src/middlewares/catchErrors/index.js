const { GenericError, UnauthorizedError } = require('../../utils/errors');
const { Logger } = require('../../utils');

const genericError = Object.freeze(new GenericError());

function catchErrors(error, req, res, next) {
  if (error instanceof GenericError) {
    if (error instanceof UnauthorizedError && error.authenticationType) {
      const realm = error.realm ? error.realm : '';
      res.set('WWW-Authenticate', `${error.authenticationType} realm="${realm}"`);
    }

    res
      .status(error.statusCode)
      .json(error.getError())
    ;
  } else {
    Logger.debug('catchErrors - not handled error', error);
    res.status(genericError.statusCode)
      .json(genericError.getError());
  }
  next(error);
}

module.exports = catchErrors;
