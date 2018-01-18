const fetch = require('node-fetch');
const humps = require('humps');
const geojson = require('geojson');
const Marker = require('../models/marker.js');
const { internal, external } = require('./data-source');

function markerGroups(req, res) {
  res.send([
    {
      name: 'Open Space',
      url: 'http://localhost:5000/markers/open-space',
    },
    {
      name: 'Staff',
      url: 'http://localhost:5000/markers/staff',
    },
    {
      name: 'Energy / Fuel',
      url: 'http://localhost:5000/markers/energy-fuel',
    },
    {
      name: 'Water',
      url: 'http://localhost:5000/markers/water',
    },
    {
      name: 'Medical',
      url: 'http://localhost:5000/markers/medical',
    },
    {
      name: 'Food',
      url: 'http://localhost:5000/markers/food',
    },
    {
      name: 'Supplies',
      url: 'http://localhost:5000/markers/supplies',
    },
    {
      name: 'Shelter',
      url: 'http://localhost:5000/markers/shelter',
    },
    {
      name: 'Privately Owned Public Open Spaces',
      url: 'http://localhost:5000/markers/privately-owned-public-open-spaces',
    },
    {
      name: 'Parks and Open Spaces',
      url: 'http://localhost:5000/markers/parks-and-open-spaces',
    },
    {
      name: 'Businesses',
      url: 'http://localhost:5000/markers/businesses',
    },
    {
        name: 'City Facilities',
        url: 'http://localhost:5000/markers/city-facilities',
    },
    {
      name: 'Healthcare Facilities',
      url: 'http://localhost:5000/markers/healthcare-facilities'},
    {
      name: 'Pit Stops',
      url: 'http://localhost:5000/markers/pit-stops'},
  ]);
}

function markersByGroup(req, res) {
  const markerGroup = humps.camelize(req.params.markerGroup);

  if (internal[markerGroup]) { // internal data
    const query = { asset: internal[markerGroup] };
    Marker.find(query).lean().exec((err, markers) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(geojson.parse(markers, {Point: 'coordinates'})); // convert to GeoJSON
      }
    });
  } else if (external[markerGroup]) { // external data
    fetch(external[markerGroup])
      .then(response => response.json())
      .then(json => res.send(json));
  } else {
    res.status(404).send('Not Found');
  }
}

// current implmentation for internal data only
function markerById(req, res) {
  const { markerGroup, markerId } = req.params;

  Marker.findById(markerId, (err, marker) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(marker);
    }
  });
}

function addMarkerToGroup(req, res) {
  const markerGroup = humps.camelize(req.params.markerGroup);

  if (internal[markerGroup]) {
    const { title, description, author, coordinates } = req.body;
    const marker = new Marker({
      title,
      description,
      author,
      coordinates,
      asset: internal[markerGroup],
    });
    marker.save((err, marker) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(201).send('Marker added');
    })
  } else {
    res.status(405).send(`This marker group is read only`);
  }
}

module.exports = {
  markerGroups,
  markersByGroup,
  markerById,
  addMarkerToGroup,
};
