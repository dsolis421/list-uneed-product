var express = require('express');
var router = express();
const listingController = require('../controllers/listingController');

router.get('/api/needlist', listingController.getFullList);
router.delete('/api/needlist/:_id', listingController.removeListItem);
router.post('/api/needlist', listingController.addListItem);

module.exports = router;
