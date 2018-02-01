const Router = require('express').Router;
const ReverseGeocodingController = require('../../controllers/ReverseGeocoding');

const router = new Router();

router.route('/api/geocoding')
  .get((...args) => ReverseGeocodingController.getGeocoding(...args));

module.exports = router;