var mongoose = require('mongoose');
const listings = mongoose.model('uneedlistings');

exports.getFullList = (req, resp, next) => {
  console.log('Listing items...')
  listings.find().exec()
  .then(list => {
    console.log('ListingModel Success');
    //resp.json(list);
    return resp.status(200).send(list);
  })
  .catch(err => {
    console.log('controller error: ', err);
    next(err);
  })
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
  })
};
