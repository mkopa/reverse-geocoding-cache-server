const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const errorFormatter = require('./src/helpers/expressValidatorErrorFormatter');
const { catchErrors, jsonOk } = require('./src/middlewares');
const appRouter = require('./src/routers');
const { settings } = require('./src/config');

// create application
const app = express();

// Connect main middlewares
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