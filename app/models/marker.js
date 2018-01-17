const mongoose = require('mongoose');

const markerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  asset: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model('Marker', markerSchema);
