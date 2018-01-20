function index(req, res) {
  res.send({
    mapDatasetsUrl: 'http://localhost:5000/map-datasets',
  });
}

module.exports = index;
