function index(req, res) {
  res.send({
    markers: 'http://localhost:5000/markers',
    regions: 'http://localhost:5000/regions',
    communityResiliencyIndicator: 'http://localhost:5000/community-resiliency-indicator'
  });
}

module.exports = index;
