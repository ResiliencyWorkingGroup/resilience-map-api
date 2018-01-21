const fetch = require('node-fetch');
const humps = require('humps');
const geojson = require('geojson');
const Marker = require('../models/marker.js');
const mapDatasets = require('../config/mapDatasets');
const { internal, external } = require('./data-source');

function getMapDatasets(req, res) {
  res.json(mapDatasets);
}

function getMapDataset(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);

  if (internal[mapDataset]) { // internal data
    const query = { asset: internal[mapDataset] };
    Marker.find(query).lean().exec((err, markers) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(geojson.parse(markers, {Point: 'coordinates'})); // convert to GeoJSON
      }
    });
  } else if (external[mapDataset]) { // external data
    fetch(external[mapDataset])
      .then(response => response.json())
      .then(json => res.send(json));
  } else {
    res.status(404).send('Not Found');
  }
}

// current implementation for internal data only
function getMapEntity(req, res) {
  const { id } = req.params;

  Marker.findById(id).exec()
    .then(mapEntity => res.json(mapEntity))
    .catch(err => res.status(404).send('Map item not found'));
}

function addMapEntity(req, res) {
  const mapDataset = humps.camelize(req.params.mapDataset);

  if (internal[mapDataset]) {
    const { title, description, author, coordinates } = req.body;

    const marker = new Marker({
      title,
      description,
      author,
      coordinates,
      asset: internal[mapDataset],
    });

    marker.save(marker)
      .then(result => res.status(201).send('Map item added'))
      .catch(err => res.status(500).send('Unable to add map item'));
  } else {
    res.status(405).send(`This map dataset is read only`);
  }
}

// current implementation for internal data only
function deleteMapEntity(req, res) {
  const { id } = req.params;
  Marker.findByIdAndRemove(id).exec()
    .then(result => res.send('Map item removed'))
    .catch(err => res.status(500).send('Unable to delete map entity'));
}

module.exports = {
  getMapDatasets,
  getMapDataset,
  getMapEntity,
  addMapEntity,
  deleteMapEntity,
 };
