var express = require('express');
var router = express();
const listingController = require('../controllers/listingController');

router.get('/api/needlist/:listowner', listingController.getFullList);
router.delete('/api/needlist/:key', listingController.removeListItem);
router.post('/api/needlist/:_id', listingController.addListItem);

module.exports = router;
