const fetch = require('node-fetch');
const humps = require('humps');
const { external } = require('./data-source');

function regionGroups(req, res) {
  res.send([
    {
      name: 'SF Neighborhoods',
      url: 'http://localhost:5000/regions/neighborhoods',
    },
    {
      name: 'Seizmic Hazard Zones',
      url: 'http://localhost:5000/regions/seizmic-hazard-zones',
    },
  ]);
}

function regionsByGroup(req, res) {
  const regionGroup = humps.camelize(req.params.regionGroup);

  if (external[regionGroup]) { // external data
    fetch(external[regionGroup])
    .then(response => response.json())
    .then(json => res.send(json));
  } else {
    res.status(404).send('Not Found');
  }
}

module.exports = { regionGroups, regionsByGroup };
