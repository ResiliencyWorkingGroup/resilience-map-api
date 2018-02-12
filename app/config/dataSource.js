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
  privatelyOwnedPublicOpenSpaces: 'https://data.sfgov.org/resource/3ub7-d4yy.geojson?$where=the_geom IS NOT NULL',
  // many records do not have lat & lng, need to filter these out
  parksAndOpenSpaces: 'https://data.sfgov.org/resource/94uf-amnx.geojson?$where=location_1 IS NOT NULL',
  schools: 'https://data.sfgov.org/resource/mmsr-vumy.geojson?$where=location_1 IS NOT NULL',
  // very large, nation-wide data set, need to limit what's returned
  businesses: 'https://data.sfgov.org/resource/vbiu-2p9h.geojson?$where=location IS NOT NULL',
  cityFacilities: 'https://data.sfgov.org/resource/i5wr-crji.geojson?$where=geom IS NOT NULL',
  healthCareFacilities: 'https://data.sfgov.org/resource/sci7-7q9i.geojson?$where=location IS NOT NULL',
  pitStops: 'https://data.sfgov.org/resource/snkr-6jdf.geojson?$where=geom IS NOT NULL',
  /* --- SF Open Data Regions --- */
  seizmicHazardZones: 'https://data.sfgov.org/resource/t2cc-dy6b.geojson?$where=the_geom IS NOT NULL',
  neighborhoods: 'https://data.sfgov.org/resource/6ia5-2f8k.geojson?$where=the_geom IS NOT NULL',
};
