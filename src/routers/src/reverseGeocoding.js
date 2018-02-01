const Router = require('express').Router;
const ReverseGeocodingController = require('../../controllers/ReverseGeocoding');
const Validator = require('../../validators/ReverseGeocoding');

const router = new Router();

router.route('/api/geocoding')
  .get((...args) => Validator.getGeocoding(...args))
  .get((...args) => ReverseGeocodingController.getGeocoding(...args));

module.exports = router;