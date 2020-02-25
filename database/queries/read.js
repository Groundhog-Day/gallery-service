const pool = require('../pool.js');

module.exports = {
  // id = random integer between 1 and 2,000,000
  readId: function(id, cb) {
    let query = `
    SELECT listings.list_id, listings.title, images.img_url, images.img_desc
    FROM listings
    INNER JOIN images
    ON listings.list_id = images.list_id
    WHERE images.list_id = ${id};
    `;

    pool.query(query, (err, res) => {
      if (err) {
        console.log('Error in readId():', err.stack);
        cb(err.stack, null);
      } else {
        cb(null, res.rows);
      }
    });

  }
};