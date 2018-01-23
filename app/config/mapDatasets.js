const mapDatasets = [
  {
    name: 'Open Space',
    url: `${process.env.SERVER_URL}/map-datasets/open-space`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Staff',
    url: `${process.env.SERVER_URL}/map-datasets/staff`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Energy / Fuel',
    url: `${process.env.SERVER_URL}/map-datasets/energy-fuel`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Water',
    url: `${process.env.SERVER_URL}/map-datasets/water`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Medical',
    url: `${process.env.SERVER_URL}/map-datasets/medical`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Food',
    url: `${process.env.SERVER_URL}/map-datasets/food`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Supplies',
    url: `${process.env.SERVER_URL}/map-datasets/supplies`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Shelter',
    url: `${process.env.SERVER_URL}/map-datasets/shelter`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'Resiliency Map',
  }, {
    name: 'Privately Owned Public Open Spaces',
    url: `${process.env.SERVER_URL}/map-datasets/privately-owned-public-open-spaces`,
    type: 'marker',
    readOnly: false,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Culture-and-Recreation/Privately-Owned-Public-Open-Spaces/65ik-7wqd',
  }, {
    name: 'Parks and Open Spaces',
    url: `${process.env.SERVER_URL}/map-datasets/parks-and-open-spaces`,
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Culture-and-Recreation/Recreation-Park-Department-Park-Info-Dataset/z76i-7s65',
  }, {
    name: 'Schools',
    url: `${process.env.SERVER_URL}/map-datasets/schools`,
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: '',
  }, {
    name: 'Businesses',
    url: `${process.env.SERVER_URL}/map-datasets/businesses`,
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Economy-and-Community/Registered-Business-Locations-San-Francisco/g8m3-pdis',
  }, {
    name: 'City Facilities',
    url: `${process.env.SERVER_URL}/map-datasets/city-facilities`,
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/City-Infrastructure/City-Facilities/nc68-ngbr',
  }, {
    name: 'Health Care Facilities',
    url: `${process.env.SERVER_URL}/map-datasets/health-care-facilities`,
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Health-and-Social-Services/Health-Care-Facilities/jhsu-2pka',
  }, {
    name: 'Pit Stops',
    url: `${process.env.SERVER_URL}/map-datasets/pit-stops`,
    type: 'marker',
    readOnly: true,
    datasetSource: 'DataSF',
    datasetSourceUrl: 'https://data.sfgov.org/Health-and-Social-Services/Pit-Stop-Locations/2gny-9qcr',
  }, {
    name: 'SF Neighborhoods',
    url: `${process.env.SERVER_URL}/map-datasets/neighborhoods`,
    type: 'region',
    readOnly: true,
    datasetSource: 'DataSF',
  }, {
    name: 'Seizmic Hazard Zones',
    url: `${process.env.SERVER_URL}/map-datasets/seizmic-hazard-zones`,
    type: 'region',
    readOnly: true,
    datasetSource: 'DataSF',
  }
];

module.exports = mapDatasets;
