const settings = {
  server: {
    port: 8010,
  },
  mongo: {
    url: 'mongodb://localhost/geocoding',
    debug: false,
  },
  geocoderOptions: {
    provider: 'google',
    httpAdapter: 'https', // Default
    // apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  },
};

module.exports = { settings };