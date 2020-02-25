const pool = require('../pool.js');
const listings = require('./genListings.js');
const images = require('./genImages.js');

images.seed();
listings.seed();