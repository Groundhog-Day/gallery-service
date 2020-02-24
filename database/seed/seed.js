const pool = require('../pool.js');
const listings = require('./genListings.js');
const images = require('./genImages.js');

// run my garbage ass seed functions :(
images.seed();
listings.seed();
