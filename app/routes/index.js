const express = require('express');
const markers = require('./markers');
const regions = require('./regions');
const index = require('../controllers');
const communityResiliencyIndicators = require('../controllers/community-resiliency-indicators');

const router = express.Router();

router.use('/markers', markers);
router.use('/regions', regions);

router.route('/')
  .get(index);

router.route('/community-resiliency-indicators')
  .get(communityResiliencyIndicators);

module.exports = router;
