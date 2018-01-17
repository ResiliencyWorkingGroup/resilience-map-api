const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_CONNECTION_STRING,
  { useMongoClient: true },
);
mongoose.Promise = global.Promise;

const app = express();

app.use(cors());

const routes = require('./app/routes');

app.use('/', routes);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Express server listening on port ${PORT}`);
});
