var mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "status": {
    type: String,
    required: true
  },
  "producturl": {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('uneedlistings', listingSchema);
