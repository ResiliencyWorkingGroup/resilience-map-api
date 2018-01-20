const express = require('express');
const mapDatasets = require('./mapDatasets');
const index = require('../controllers');

const router = express.Router();

router.use('/map-datasets', mapDatasets);

router.route('/')
  .get(index);

module.exports = router;
