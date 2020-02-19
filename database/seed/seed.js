const pool = require('../pool.js');
const listings = require('./genListings.js');
const images = require('./genImages.js');

// Call the seeding scripts (+1 to intended input number)
listings.seed(11, 2);
// images.seed(11, 2);

// Add foreign key
// pool.query('ALTER TABLE listings ADD FOREIGN KEY (imgId) REFERENCES public.images (id);', (err, res) => {
//   if (err) {
//     console.log(err.stack);
//   } else {
//     console.log('foreign key added!');
//   }
// });