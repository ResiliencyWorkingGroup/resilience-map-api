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
    if (internal[mapDataset]) { // internal data
      const query = { asset: internal[mapDataset] };

      const response = await Marker.find(query).lean().exec();
      dataset = geojson.parse(response, {Point: 'coordinates'});

      return dataset;
    } else if (external[mapDataset]) { // external data
      const response = await fetch(external[mapDataset]);
      dataset = await response.json();

      return dataset;
    } else {
      throw new Error; // invalid dataset;
    }
  } catch (error) {
    throw new Error(error);
  }

}

async function getEntity(mapDataset, id) {

  if (internal[mapDataset]) {
    try {
      const response = await Marker.findById(id).exec();

      return response;
    } catch (error) {
      throw new Error(error);
    }
  } throw new Error(); // can't get individual item from an external dataset
}

async function createEntity(mapDataset, entity) {
  // add check to make sure entity(lat, lng) doesn't exist

  if (internal[mapDataset]) {
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
  } else {
    throw new Error(); // can't add an item to a external dataset
  }
}

async function updateEntity(mapDataset, id, entity) {
  if (internal[mapDataset]) {
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
  } else {
    throw new Error; // can't update item in external dataset
  }
}

async function deleteEntity(mapDataset, id) {
  if (internal[mapDataset]) {
    try {
      const deletedEntity = await Marker.findByIdAndRemove(id).exec();

      return deletedEntity;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw Error(); // can't delete item from external dataset
  }
}

module.exports = {
  getAll,
  getById,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
};
