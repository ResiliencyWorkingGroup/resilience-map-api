function addAuthor(dataset, author) {
  dataset.features.map(feature => {
    feature.properties.author = author;
  });
  return dataset;
}

module.exports = addAuthor;
