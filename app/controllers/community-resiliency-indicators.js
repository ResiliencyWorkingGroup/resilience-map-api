const fetch = require('node-fetch');
const humps = require('humps');
const { external } = require('./data-source');

function communityResiliencyIndicators(req, res) {
  fetch(external.communityResiliencyIndicators)
    .then(response => response.json())
    .then(json => res.send(json));
}

module.exports = communityResiliencyIndicators;
