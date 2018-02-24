const fetch = require('node-fetch');
const geojson = require('geojson');
const Marker = require('../models/marker.js');
const mapDatasets = require('../config/mapDatasets');
const { internal, external } = require('../config/dataSource');

async function getAll() {
  const datasets = await mapDatasets; // simulated db call

  return datasets;
}

async function getById(mapDataset) {
  try {
    const query = { asset: internal[mapDataset] };

    const response = await Marker.find(query).lean().exec();
    const dataset = geojson.parse(response, {Point: 'coordinates'});

    return dataset;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchById(mapDataset) {
  try {
    const response = await fetch(external[mapDataset].url);
    const dataset = await response.json();

    const modifiedDataset = external[mapDataset].modifyDataset(dataset);

    return modifiedDataset;
  } catch (error) {
    throw new Error(error);
  }
}

async function getEntity(mapDataset, id) {
  try {
    const response = await Marker.findById(id).exec();

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function createEntity(mapDataset, entity) {
  const { title, description, author, coordinates } = entity;

  const marker = new Marker({
    title,
    description,
    author,
    coordinates,
    asset: internal[mapDataset],
  });

  try {
    const newEntity = await marker.save(marker);

    return newEntity;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateEntity(mapDataset, id, entity) {
  const options = {new: true}; // return updated document

  if (entity._id) {
    delete entity._id;
  }

  try {
    const updatedEntity = await Marker.findByIdAndUpdate(id, entity, options).exec();

    return updatedEntity; // hmm, null returned if id not found
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteEntity(mapDataset, id) {
  try {
    const deletedEntity = await Marker.findByIdAndRemove(id).exec();

    return deletedEntity;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAll,
  getById,
  fetchById,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
};
