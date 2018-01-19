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

// current implmentation for internal data only
function getMapEntity(req, res) {
  const { mapDataset, id } = req.params;

  Marker.findById(id, (err, entity) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(entity);
    }
  });
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
    marker.save((err, marker) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(201).send('Map item added');
    })
  } else {
    res.status(405).send(`This map dataset is read only`);
  }
}

module.exports = {
  getMapDatasets,
  getMapDataset,
  getMapEntity,
  addMapEntity,
 };
