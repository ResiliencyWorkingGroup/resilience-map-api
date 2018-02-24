exports.internal = {
    supplies: 'supplies',
    staff: 'staff',
    food: 'food',
    water: 'water',
    energyFuel: 'energy or fuel',
    medical: 'medical',
    openSpace: 'open space',
    shelter: 'shelter',
};

exports.external = {
  /* --- SF Open Data --- */
  communityResiliencyIndicators: {
    url:'https://data.sfgov.org/resource/wsj2-27m9.json',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  /* --- SF Open Data Markers --- */
  privatelyOwnedPublicOpenSpaces: {
    url: 'https://data.sfgov.org/resource/3ub7-d4yy.geojson?$where=the_geom IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  parksAndOpenSpaces: {
    url: 'https://data.sfgov.org/resource/94uf-amnx.geojson?$where=location_1 IS NOT NULL',
    modifyDataset: (dataset) => {
		  // do something here as needed
      return dataset;
	  },
  },
  schools: {
  url: 'https://data.sfgov.org/resource/mmsr-vumy.geojson?$where=location_1 IS NOT NULL',
  modifyDataset: (dataset) => {
    // do something here as needed
    return dataset;
  },
},
  // very large, nation-wide data set, need to limit what's returned
  businesses: {
    url: 'https://data.sfgov.org/resource/vbiu-2p9h.geojson?$where=location IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  cityFacilities: {
    url: 'https://data.sfgov.org/resource/i5wr-crji.geojson?$where=geom IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  healthCareFacilities: {
    url: 'https://data.sfgov.org/resource/sci7-7q9i.geojson?$where=location IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  pitStops: {
    url:'https://data.sfgov.org/resource/snkr-6jdf.geojson?$where=geom IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  /* --- SF Open Data Regions --- */
  seizmicHazardZones: {
    url: 'https://data.sfgov.org/resource/t2cc-dy6b.geojson?$where=the_geom IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
  neighborhoods:{
    url: 'https://data.sfgov.org/resource/6ia5-2f8k.geojson?$where=the_geom IS NOT NULL',
    modifyDataset: (dataset) => {
      // do something here as needed
      return dataset;
    },
  },
};
