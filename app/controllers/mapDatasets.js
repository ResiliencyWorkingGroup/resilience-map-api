const fetch = require('node-fetch');
const humps = require('humps');
const {
  getAll,
  getById,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
} = require('../repositories');

function getMapDatasets(req, res) {
  getAll()
    .then((datasets) => res.json(datasets));
}

function getMapDataset(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);

  getById(mapDataset)
    .then((dataset) => res.json(dataset))
    .catch((error) => res.status(404).send('Map dataset not found'));
}

function getMapEntity(req, res) {
  const { mapDataset, id } = req.params;

  getEntity(mapDataset, id)
    .then((entity) => res.json(entity))
    .catch((error) => res.status(404).send('Map item not found'));
}

function addMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const entity = req.body;

  createEntity(mapDataset, entity)
    .then((newEntity) => res.send('Map item added'))
    .catch((error) => res.status(500).send('Unable to add map item'));
}

function updateMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const { id } = req.params;
  const entity = req.body;

  updateEntity(mapDataset, id, entity)
    .then((updatedEntity) => res.send('Map item updated'))
    .catch((error) => res.status(500).send('Unable to add map item'));
}

function deleteMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const { id } = req.params;

  deleteEntity(mapDataset, id)
    .then((deletedEntity) => res.send('Map item deleted'))
    .catch((error) => res.status(500).send('Unable to delete map item'));
}

module.exports = {
  getMapDatasets,
  getMapDataset,
  getMapEntity,
  addMapEntity,
  updateMapEntity,
  deleteMapEntity,
 };
