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
  communityResiliencyIndicators: 'https://data.sfgov.org/resource/wsj2-27m9.json',
  /* --- SF Open Data Markers --- */
  privatelyOwnedPublicOpenSpaces: 'https://data.sfgov.org/resource/3ub7-d4yy.geojson',
  // many records do not have lat & lng, need to filter these out
  parksAndOpenSpaces: 'https://data.sfgov.org/resource/94uf-amnx.geojson',
  schools: 'https://data.sfgov.org/resource/mmsr-vumy.geojson',
  // very large, nation-wide data set, need to limit what's returned
  businesses: 'https://data.sfgov.org/resource/vbiu-2p9h.geojson',
  cityFacilities: 'https://data.sfgov.org/resource/i5wr-crji.geojson',
  healthCareFacilities: 'https://data.sfgov.org/resource/sci7-7q9i.geojson',
  pitStops: 'https://data.sfgov.org/resource/snkr-6jdf.geojson',
  /* --- SF Open Data Regions --- */
  seizmicHazardZones: 'https://data.sfgov.org/resource/t2cc-dy6b.geojson',
  neighborhoods: 'https://data.sfgov.org/resource/6ia5-2f8k.geojson',
};
