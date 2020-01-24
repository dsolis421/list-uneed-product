var express = require('express');
var router = express();
const listingController = require('../controllers/listingController');

router.get('/api/needlist/:listowner', listingController.getFullList);
router.delete('/api/needlist/:key', listingController.removeListItem);
router.post('/api/addlistitem/:_id', listingController.addListItem);
router.post('/api/removelistitem/:listowner', listingController.removeListItem);

module.exports = router;
