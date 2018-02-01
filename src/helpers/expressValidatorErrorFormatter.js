/* eslint-disable arrow-body-style */

const errorFormatter = {
  errorFormatter: (param, msg, val) => {
    return {
      parameter: param,
      message: msg,
      value: val,
    };
  },
  customValidators: {
    isArray: (value) => {
      return Array.isArray(value);
    },
    isObject: (value) => {
      return value === Object(value);
    },
    isBased64JsonObject: (value) => {
      try {
        JSON.parse(Buffer.from(value, 'base64').toString());
        return true;
      }
      catch(error) {
        return false;
      }
    },
    isEqual: (value, number) => value === number,
    isLesserThan: (value, number) => value < number,
    isGreaterThan: (value, number) => value > number,
  },
};

module.exports = errorFormatter;