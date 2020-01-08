require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/*Models*/
require('./models/ListingsModel');
//routes
var listingRoutes = require('./routes/listingRoutes');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("[MONGOOSE] Connected to MongoDB"))
  .catch(err => console.log("[MONGOOSE] FAILED to connect --> " + err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(listingRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[APP] server running on port ${PORT}`);
});
