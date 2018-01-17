const express = require('express');
const markers = require('./markers');
const regions = require('./regions');
const index = require('../controllers');

const router = express.Router();

router.use('/markers', markers);
router.use('/regions', regions);

router.route('/')
  .get(index);

module.exports = router;
