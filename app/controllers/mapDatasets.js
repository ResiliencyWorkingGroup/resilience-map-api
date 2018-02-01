const fetch = require('node-fetch');
const humps = require('humps');
const {
  getAll,
  getById,
  fetchById,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
} = require('../repositories');
const { internal, external } = require('../config/dataSource');

function getMapDatasets(req, res) {
  getAll()
    .then((datasets) => res.json(datasets))
    .catch((error) => res.send('Map datasets not found'));
}

function getMapDataset(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);

  if (internal[mapDataset]) {
    getById(mapDataset)
      .then((dataset) => res.json(dataset))
      .catch((error) => res.status(404).send('Map dataset not found'));
  } else if (external[mapDataset]) {
    fetchById(mapDataset)
      .then((dataset) => res.json(dataset))
      .catch((error) => res.status(404).send('Map dataset not found'));
  } else {
    res.status(404).send('Map dataset not found');
  }
}

function getMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const { id } = req.params;

  if (internal[mapDataset]) {
    getEntity(mapDataset, id)
    .then((entity) => res.json(entity))
    .catch((error) => res.status(404).send('Map item not found'));
  } else if (external[mapDataset]) {
    // implement later if we need to fetch an individual item from an external dataset
    res.sendStatus(405);
  } else {
    res.status(404).send('Map item not found');
  }
}

function addMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const entity = req.body;

  if (internal[mapDataset]) {
    // add check here to make sure entity(lat, lng) doesn't exist
    createEntity(mapDataset, entity)
      .then((newEntity) => res.send('Map item added'))
      .catch((error) => res.status(500).send('Unable to add map item'));
  } else if (external[mapDataset]) {
    res.sendStatus(405); // can't add an item to a external dataset
  } else {
    res.status(404).send('Map item not found');
  }
}

function updateMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const { id } = req.params;
  const entity = req.body;

  if (internal[mapDataset]) {
    updateEntity(mapDataset, id, entity)
      .then((updatedEntity) => res.send('Map item updated'))
      .catch((error) => res.status(500).send('Unable to add map item'));
  } else if (external[mapDataset]) {
    res.sendStatus(405); // can't update item in external dataset
  } else {
    res.status(404).send('Map item not found');
  }
}

function deleteMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);
  const { id } = req.params;

  if (internal[mapDataset]) {
    deleteEntity(mapDataset, id)
      .then((deletedEntity) => res.send('Map item deleted'))
      .catch((error) => res.status(500).send('Unable to delete map item'));
  } else if (external[mapDataset]) {
    res.sendStatus(405); // can't delete item from external dataset
  } else {
    res.status(404).send('Map item not found');
  }
}

module.exports = {
  getMapDatasets,
  getMapDataset,
  getMapEntity,
  addMapEntity,
  updateMapEntity,
  deleteMapEntity,
 };
