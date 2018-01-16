const express = require('express');
const { regionGroups, regionsByGroup } = require('../controllers/regions');
const router = express.Router();

router.route('/')
  .get(regionGroups);

router.route('/:regionGroup')
  .get(regionsByGroup);

  module.exports = router;
