var mongoose = require('mongoose');
const listings = mongoose.model('uneedlistings');
const uuidv4 = require('uuid/v4');

exports.getFullList = (req, resp, next) => {
  console.log('Listing items...')
  listings.find({listowner: req.params.listowner}).exec()
  .then(listing => {
    console.log('ListingModel Success');
    //resp.json(list);
    return resp.status(200).send(listing);
  })
  .catch(err => {
    console.log('controller error: ', err);
    next(err);
  });
};

exports.removeListItem = (req, resp, next) => {
  console.log('trying to delete at the controller...');
  listings.findByIdAndRemove(req.params._id).exec()
  .then(list => {
    console.log('deleted a list item', list);
    return resp.status(202).send({error: false, list});
  })
  .catch(err => {
    console.log('item delete error: ',err);
    next(err);
  });
};

exports.addListItem = (req, resp, next) => {
  var uniqueid = uuidv4();
  console.log('trying to clone at the controller...', req.body);
  /*const ITEM = new listings({
    status: 'Needed',
    key: uniqueid,
    name: req.body.name || 'No Name',
    producturl: req.body.producturl || ''
  });*/
  listings.findById(req.params._id).exec()
  .then(listing => {
    console.log('cloned a list item',listing);
    listing.list.push({key: uniqueid, status: 'Needed', name: req.body.name || 'No Name', producturl: req.body.producturl || ''});
    return listing.save();
  })
  .then(() => {
    return resp.status(201).send({error: false});
  })
  .catch(err => {
    console.log('item delete error: ',err);
    next(err);
  });
};
