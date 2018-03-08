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
    url: "https://data.sfgov.org/resource/wsj2-27m9.json",
    modifyDataset: dataset => {
      // do something here as needed
      return dataset;
    }
  },
  /* --- SF Open Data Markers --- */
  privatelyOwnedPublicOpenSpaces: {
    url: "https://data.sfgov.org/resource/3ub7-d4yy.geojson",
    query:
      "$query=SELECT name AS title, descriptio AS description, the_geom WHERE the_geom IS NOT NULL",
    author: "DataSF"
  },
  parksAndOpenSpaces: {
    url: "https://data.sfgov.org/resource/94uf-amnx.geojson",
    query:
      "$query=SELECT parkid AS _id, parktype AS description, parkname AS name, location_1 WHERE location_1 IS NOT NULL",
    author: "DataSF"
  },
  schools: {
    url: "https://data.sfgov.org/resource/mmsr-vumy.geojson",
    query:
      "$query=SELECT location_1, campus_name AS name, campus_address AS description, county_fips AS _id WHERE location_1 IS NOT NULL",
    author: "DataSF"
  },
  // very large, nation-wide data set, need to limit what's returned
  businesses: {
    url: "https://data.sfgov.org/resource/vbiu-2p9h.geojson",
    query:
      "$query=SELECT * WHERE location IS NOT NULL AND city = 'San Francisco'",
    author: "DataSF"
  },
  cityFacilities: {
    url: "https://data.sfgov.org/resource/i5wr-crji.geojson",
    query:
      "$query=SELECT facility_id AS _id, common_name AS name, address AS description, geom WHERE geom IS NOT NULL",
    author: "DataSF"
  },
  healthCareFacilities: {
    url: "https://data.sfgov.org/resource/sci7-7q9i.geojson",
    query:
      "$query=SELECT uid AS _id, facility_name AS name, facility_type AS description WHERE location IS NOT NULL",
    author: "DataSF"
  },
  pitStops: {
    url: "https://data.sfgov.org/resource/snkr-6jdf.geojson",
    query:
      "$query=SELECT id AS _id, location AS name, facilitytype AS description, geom WHERE geom IS NOT NULL",
    author: "DataSF"
  },
  /* --- SF Open Data Regions --- */
  seismicHazardZones: {
    url: "https://data.sfgov.org/resource/t2cc-dy6b.geojson",
    query: "$query=SELECT id AS _id, the_geom WHERE the_geom IS NOT NULL",
    author: "DataSF"
  },
  neighborhoods: {
    url: "https://data.sfgov.org/resource/6ia5-2f8k.geojson",
    query:
      "$query=SELECT the_geom, name, link AS description WHERE the_geom IS NOT NULL",
    author: "DataSF"
  }
};
