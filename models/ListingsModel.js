var mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  "key": {
    type: String,
    required: true
  },
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

const listingSchema = new mongoose.Schema({
  "listowner": {
    type: String,
    required: true
  },
  "list": {
    type: [listItemSchema],
    required: true
  }
});

module.exports = mongoose.model('uneedlistings', listingSchema);
