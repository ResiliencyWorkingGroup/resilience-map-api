const mapDatasets = [
  {
    name: 'Open Space',
    url: 'http://localhost:5000/map-datasets/open-space',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Staff',
    url: 'http://localhost:5000/map-datasets/staff',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Energy / Fuel',
    url: 'http://localhost:5000/map-datasets/energy-fuel',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Water',
    url: 'http://localhost:5000/map-datasets/water',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Medical',
    url: 'http://localhost:5000/map-datasets/medical',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Food',
    url: 'http://localhost:5000/map-datasets/food',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Supplies',
    url: 'http://localhost:5000/map-datasets/supplies',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Shelter',
    url: 'http://localhost:5000/map-datasets/shelter',
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Privately Owned Public Open Spaces',
    url: 'http://localhost:5000/map-datasets/privately-owned-public-open-spaces',
    type: 'marker',
    readOnly: false,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Culture-and-Recreation/Privately-Owned-Public-Open-Spaces/65ik-7wqd',
  }, {
    name: 'Parks and Open Spaces',
    url: 'http://localhost:5000/map-datasets/parks-and-open-spaces',
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Culture-and-Recreation/Recreation-Park-Department-Park-Info-Dataset/z76i-7s65',
  }, {
    name: 'Schools',
    url: 'http://localhost:5000/map-datasets/schools',
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: '',
  }, {
    name: 'Businesses',
    url: 'http://localhost:5000/map-datasets/businesses',
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Economy-and-Community/Registered-Business-Locations-San-Francisco/g8m3-pdis',
  }, {
    name: 'City Facilities',
    url: 'http://localhost:5000/map-datasets/city-facilities',
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/City-Infrastructure/City-Facilities/nc68-ngbr',
  }, {
    name: 'Health Care Facilities',
    url: 'http://localhost:5000/map-datasets/health-care-facilities',
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Health-and-Social-Services/Health-Care-Facilities/jhsu-2pka',
  }, {
    name: 'Pit Stops',
    url: 'http://localhost:5000/map-datasets/pit-stops',
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Health-and-Social-Services/Pit-Stop-Locations/2gny-9qcr',
  }, {
    name: 'SF Neighborhoods',
    url: 'http://localhost:5000/map-datasets/neighborhoods',
    type: 'region',
    readOnly: true,
    datasetSource: 'DataSF',
  }, {
    name: 'Seizmic Hazard Zones',
    url: 'http://localhost:5000/map-datasets/seizmic-hazard-zones',
    type: 'region',
    readOnly: true,
    datasetSource: 'DataSF',
  }
];

module.exports = mapDatasets;
