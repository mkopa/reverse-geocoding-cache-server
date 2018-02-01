const NodeGeocoder = require('node-geocoder');
const { settings } = require('../config');
const geocoder = NodeGeocoder(settings.geocoderOptions);

class ReverseGeocodingController {
  static getGeocoding(req, res, next) {
    geocoder.reverse({lat: 53.096597, lon: 23.117618})
      .then(function(geo) {
        res.json(geo);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  }
}

module.exports = ReverseGeocodingController;