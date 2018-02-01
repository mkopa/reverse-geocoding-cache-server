const NodeGeocoder = require('node-geocoder');
const { settings } = require('../config');
const geocoder = NodeGeocoder(settings.geocoderOptions);

class ReverseGeocodingController {
  static getGeocoding(req, res, next) {
    const latLong = req.query.LatLong.split(' ').join('').split(',');
    const lat = latLong[0];
    const lon = latLong[1];
    geocoder.reverse({ lat, lon })
      .then((geo) => {
        res.jsonOk(geo);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}

module.exports = ReverseGeocodingController;