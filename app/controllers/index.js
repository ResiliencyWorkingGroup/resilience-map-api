function index(req, res) {
  res.send({
    markers: 'http://localhost:5000/markers',
    regions: 'http://localhost:5000/regions',
    mapDatasetsUrl: 'http://localhost:5000/map-datasets',
    communityResiliencyIndicators: 'http://localhost:5000/community-resiliency-indicators'
  });
}

module.exports = index;
