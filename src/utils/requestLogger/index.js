const logger = require('morgan');
const FileStreamRotator = require('file-stream-rotator');
const fs = require('fs');
const path = require('path');

function getLogger(logDir, frequency) {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: path.join(logDir, '%DATE%-access.log'),
    frequency,
    verbose: false,
  });

  return logger('combined', { stream: accessLogStream });
}

module.exports = getLogger;
