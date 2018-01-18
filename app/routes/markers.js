const express = require('express');
const {
  markerGroups,
  markersByGroup,
  markerById,
  addMarkerToGroup } = require('../controllers/markers');
const router = express.Router();

router.route('/')
  .get(markerGroups);

router.route('/:markerGroup')
  .get(markersByGroup)
  .post(addMarkerToGroup);

// current implmentation for internal data only
router.route('/:markerGroup/:markerId')
  .get(markerById);

module.exports = router;
