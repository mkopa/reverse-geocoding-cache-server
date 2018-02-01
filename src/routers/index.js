const Router = require('express').Router;
const reverseGeocoding = require('./src/reverseGeocoding');

const router = new Router();
router.use('/', reverseGeocoding);

module.exports = router;
