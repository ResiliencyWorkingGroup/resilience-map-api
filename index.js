const express = require('express');
const mongoose = require('mongoose');
const Marker = require('./app/models/marker');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_CONNECTION_STRING,
  { useMongoClient: true },
);
mongoose.Promise = global.Promise;

const app = express();

app.use(cors());

const index = require('./app/routes/index');
const markers = require('./app/routes/markers');
const regions = require('./app/routes/regions');

app.use('/', index);
app.use('/markers', markers);
app.use('/regions', regions);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Express server listening on port ${PORT}`);
});
