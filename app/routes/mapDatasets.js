const router = require('express').Router();
const {
  getMapDatasets,
  getMapDataset,
  getMapEntity,
  addMapEntity,
  deleteMapEntity,
} = require('../controllers/mapDatasets');

router.route('/')
  .get(getMapDatasets);

router.route('/:mapDataset')
  .get(getMapDataset)
  .post(addMapEntity);

// current implementation for internal data only
router.route('/:mapDataset/:id')
  .get(getMapEntity)
  .delete(deleteMapEntity);

module.exports = router;
