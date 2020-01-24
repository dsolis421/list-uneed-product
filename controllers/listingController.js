var mongoose = require('mongoose');
const listings = mongoose.model('uneedlistings');
const uuidv4 = require('uuid/v4');

exports.getFullList = (req, resp, next) => {
  //console.log('Listing items...')
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
  //console.log('trying to update this list...');
  listings.find({listowner: req.params.listowner}).exec()
  .then(newlist => {
    console.log('compiling newlist');
    newlist[0].list = req.body;
    return newlist[0].save();
  })
  .then(() => {
    return resp.status(201).send({error: false});
  })
  .catch(err => {
    console.log('item delete error: ',err);
    next(err);
  });
};

exports.addListItem = (req, resp, next) => {
  var uniqueid = uuidv4();
  //console.log('trying to clone at the controller...');
  /*const ITEM = new listings({
    status: 'Needed',
    key: uniqueid,
    name: req.body.name || 'No Name',
    producturl: req.body.producturl || ''
  });*/
  listings.findById(req.params._id).exec()
  .then(listing => {
    console.log('cloned a list item');
    listing.list.unshift({key: uniqueid, status: 'Needed', name: req.body.name || 'No Name', producturl: req.body.producturl || '', quantity: 1});
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
