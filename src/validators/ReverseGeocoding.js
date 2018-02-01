const { errors } = require('../utils');

class ReverseGeocodingValidator {
  static getGeocoding(req, res, next) {
    req.checkQuery('LatLong', 'can not be empty').notEmpty();
    req.checkQuery('LatLong', 'wrong latitude-longitude coordinate format (must be: lat,long)')
      .isLatLong();
    const error = req.validationErrors();
    if (error) {
      return next(new errors.BadRequestError(error));
    }
    return next();
  }
}

module.exports = ReverseGeocodingValidator;