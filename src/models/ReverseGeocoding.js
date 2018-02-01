const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reverseGeocodingSchema = new Schema({
  location: { 
    type: { type: String },
    coordinates: [Number],//{ type: [Number], index: '2dsphere' },
  },
  data: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  __v: { type: Number, select: false },
});

reverseGeocodingSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('ReverseGeocoding', reverseGeocodingSchema);