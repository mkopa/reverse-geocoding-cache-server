const NodeGeocoder = require('node-geocoder');
const ReverseGeocodingModel = require('../models/ReverseGeocoding');
const { settings } = require('../config');
const { errors } = require('../utils');

const geocoder = NodeGeocoder(settings.geocoderOptions);

class ReverseGeocodingController {
  static getGeocoding(req, res, next) {
    const latLong = req.query.LatLong.split(' ').join('').split(',');
    const lat = latLong[0];
    const lon = latLong[1];
    geocoder.reverse({ lat, lon })
      .then((geo) => {
        const reverseGeocoding = {
          location: {
            type: 'Point',
            coordinates: [lon, lat],
          },
          data: geo,
        }
        const reverseGeocodingModel = new ReverseGeocodingModel(reverseGeocoding);
        return reverseGeocodingModel.save().then(() => geo);
      })
      .then(geo => res.jsonOk(geo))
      .catch((err) => next(new errors.InternalServerError(err)));
  }
}

module.exports = ReverseGeocodingController;