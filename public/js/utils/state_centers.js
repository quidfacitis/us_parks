const stateCenters = [
  {
    state: 'ma',
    coord: [-71.8083, 42.2596], //lng, lat
    zoom: 7
  },
  {
    state: 'mn',
    coord: [-94.3053, 46.2807], //lng, lat
    zoom: 5.3
  },
  {
    state: 'mt',
    coord: [-109.6333, 47.0527], //lng, lat
    zoom: 5.7
  },
  {
    state: 'nd',
    coord: [-100.4659, 47.4501], //lng, lat
    zoom: 6
  },
  {
    state: 'hi',
    coord: [-156.3737, 20.2927], //lng, lat
    zoom: 6.2
  },
  {
    state: 'id',
    coord: [-114.613, 44.3509], //lng, lat
    zoom: 5.5
  },
  {
    state: 'wa',
    coord: [-120.4472, 47.3826], //lng, lat
    zoom: 6
  },
  {
    state: 'az',
    coord: [-111.6602, 34.2744], //lng, lat
    zoom: 5.5
  },
  {
    state: 'ca',
    coord: [-119.4696, 37.1841], //lng, lat
    zoom: 4.7
  },
  {
    state: 'co',
    coord: [-105.5478, 38.9972], //lng, lat
    zoom: 5.8
  },
  {
    state: 'nv',
    coord: [-116.6312, 39.3289], //lng, lat
    zoom: 5
  },
  {
    state: 'nm',
    coord: [-106.1126, 34.4071], //lng, lat
    zoom: 6
  },
  {
    state: 'or',
    coord: [-120.5583, 43.9336], //lng, lat
    zoom: 6
  },
  {
    state: 'ut',
    coord: [-111.6703, 39.3055], //lng, lat
    zoom: 6
  },
  {
    state: 'wy',
    coord: [-107.5512, 42.9957], //lng, lat
    zoom: 5.8
  },
  {
    state: 'ar',
    coord: [-92.4426, 34.8938], //lng, lat
    zoom: 6
  },
  {
    state: 'ia',
    coord: [-93.496, 42.0751], //lng, lat
    zoom: 6
  },
  {
    state: 'ks',
    coord: [-98.3804, 38.4937], //lng, lat
    zoom: 6
  },
  {
    state: 'mo',
    coord: [-92.458, 38.3566], //lng, lat
    zoom: 6
  },
  {
    state: 'ne',
    coord: [-99.7951, 41.5378], //lng, lat
    zoom: 5.5
  },
  {
    state: 'ok',
    coord: [-97.4943, 35.5889], //lng, lat
    zoom: 5.5
  },
  {
    state: 'sd',
    coord: [-100.2263, 44.4443], //lng, lat
    zoom: 6
  },
  {
    state: 'la',
    coord: [-91.9968, 31.0689], //lng, lat
    zoom: 6
  },
  {
    state: 'tx',
    coord: [-99.3312, 31.4757], //lng, lat
    zoom: 4.7
  },
  {
    state: 'ct',
    coord: [-72.7273, 41.6219], //lng, lat
    zoom: 7
  },
  {
    state: 'nh',
    coord: [-71.5811, 43.6805], //lng, lat
    zoom: 6.5
  },
  {
    state: 'ri',
    coord: [-71.5562, 41.6762], //lng, lat
    zoom: 7.5
  },
  {
    state: 'vt',
    coord: [-72.6658, 44.0687], //lng, lat
    zoom: 6.5
  },
  {
    state: 'al',
    coord: [-86.8287, 32.7794], //lng, lat
    zoom: 6
  },
  {
    state: 'fl',
    coord: [-82.4497, 28.6305], //lng, lat
    zoom: 5
  },
  {
    state: 'ga',
    coord: [-83.4426, 32.6415], //lng, lat
    zoom: 5.7
  },
  {
    state: 'ms',
    coord: [-89.6678, 32.7364], //lng, lat
    zoom: 5.7
  },
  {
    state: 'sc',
    coord: [-80.8964, 33.9169], //lng, lat
    zoom: 6
  },
  {
    state: 'il',
    coord: [-89.1965, 40.0417], //lng, lat
    zoom: 5.5
  },
  {
    state: 'in',
    coord: [-86.2816, 39.8942], //lng, lat
    zoom: 6
  },
  {
    state: 'ky',
    coord: [-85.3021, 37.5347], //lng, lat
    zoom: 6
  },
  {
    state: 'nc',
    coord: [-79.3877, 35.5557], //lng, lat
    zoom: 6
  },
  {
    state: 'oh',
    coord: [-82.7937, 40.2862], //lng, lat
    zoom: 6
  },
  {
    state: 'tn',
    coord: [-86.3505, 35.858], //lng, lat
    zoom: 6
  },
  {
    state: 'va',
    coord: [-78.8537, 37.5215], //lng, lat
    zoom: 5.5
  },
  {
    state: 'wi',
    coord: [-89.9941, 44.6243], //lng, lat
    zoom: 5.5
  },
  {
    state: 'wv',
    coord: [-80.6227, 38.6409], //lng, lat
    zoom: 6
  },
  {
    state: 'de',
    coord: [-75.505, 38.9896], //lng, lat
    zoom: 7
  },
  {
    state: 'dc',
    coord: [-77.0147, 38.9101], //lng, lat
    zoom: 11
  },
  {
    state: 'md',
    coord: [-76.7909, 39.055], //lng, lat
    zoom: 6.5
  },
  {
    state: 'nj',
    coord: [-74.6728, 40.1907], //lng, lat
    zoom: 6.5
  },
  {
    state: 'ny',
    coord: [-75.5268, 42.9538], //lng, lat
    zoom: 5.5
  },
  {
    state: 'pa',
    coord: [-77.7996, 40.8781], //lng, lat
    zoom: 6
  },
  {
    state: 'me',
    coord: [-69.2428, 45.3695], //lng, lat
    zoom: 5.7
  },
  {
    state: 'mi',
    coord: [-85.4102, 44.3467], //lng, lat
    zoom: 5
  },
  {
    state: 'ak',
    coord: [-152.2782, 64.0685], //lng, lat
    zoom: 3.5
  }
];
