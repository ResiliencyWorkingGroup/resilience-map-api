function index(req, res) {
  res.send({
    mapDatasetsUrl: `${process.env.SERVER_URL}/map-datasets`,
  });
}

module.exports = index;
