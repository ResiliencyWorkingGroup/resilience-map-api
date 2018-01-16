const express = require('express');
const {
  markerGroups,
  markersByGroup,
  markerById } = require('../controllers/markers');
const router = express.Router();

router.route('/')
  .get(markerGroups);

router.route('/:markerGroup')
  .get(markersByGroup);

// current implmentation for internal data only
router.route('/:markerGroup/:markerId')
  .get(markerById);

module.exports = router;
