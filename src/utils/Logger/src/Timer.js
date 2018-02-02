const _ = require('lodash');
const moment = require('moment');

class Timer {
  constructor(name) {
    this.name = name || '(no name)';
    this.is_working = false;
  }

  start() {
    this.is_working = true;
    this.start_date = Date.now();
  }

  markStopDate() {
    this.stop_date = Date.now();
  }

  stop() {
    this.markStopDate();
    this.is_working = false;
  }

  getDuration() {
    if (this.is_working) {
      this.markStopDate();
    }

    return moment.duration(Number(this.stop_date) - Number(this.start_date), 'milliseconds');
  }

  wasStarted() {
    return !_.isNil(this.start_date);
  }

  getHumanDuration() {
    const duration = this.getDuration();
    return `${duration.asSeconds()}s`;
  }

  toString() {
    if (!this.wasStarted()) {
      return `Timer ${this.name} was not started yet.`;
    }

    if (this.is_working) {
      return `Timer ${this.name} is still working (${this.getHumanDuration()})!`;
    }

    return `Timer ${this.name} duration: ${this.getHumanDuration()}`;
  }

  valueOf() {
    return this.toString();
  }
}

module.exports = Timer;
