const settings = {
  server: {
    port: 8010,
  },
  geocoderOptions: {
    provider: 'google',
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    // apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  }
};

module.exports = { settings };