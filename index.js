const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const errorFormatter = require('./src/helpers/expressValidatorErrorFormatter');
const { catchErrors, jsonOk } = require('./src/middlewares');
const appRouter = require('./src/routers');
const { settings } = require('./src/config');

// setup database
mongoose.Promise = bluebird;
mongoose.connect(settings.mongo.url);
mongoose.set('debug', settings.mongo.debug);

// create application
const app = express();

// connect main middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator(errorFormatter));
app.use(jsonOk);
app.use(appRouter);
app.use(catchErrors);

// Start server
app.listen(settings.server.port, () => {
  console.log(`Service started on port ${settings.server.port}`);
});
  
module.exports = app;