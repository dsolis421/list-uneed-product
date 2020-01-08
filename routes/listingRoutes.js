var express = require('express');
var router = express.Router();
const listingController = require('../controllers/listingController');

router.get('/api/needlist', listingController.getFullList);
router.delete('/api/needlist/:_id', listingController.removeListItem);

module.exports = router;
