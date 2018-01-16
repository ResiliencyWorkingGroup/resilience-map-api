const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marker = new Schema(
  {
    coordinates: { type: [Number] },
    asset: { type: String },
    author: { type: String },
    description: { type: String },
    title: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Marker', marker);
