const pool = require('../pool.js');

module.exports = {
  // destructure request data
  createListing: function({ title, images }, cb) {
    /*

      1. insert a title into listings first

    */

    let queryListings = `
      INSERT INTO listings (title)
      VALUES ('${title}')
      RETURNING list_id;
    `;
    console.log(queryListings);

    // Insert into listings first, because it's referenced by a foreign key
    pool.query(queryListings, (err, listingsRes) => {
      if (err) {
        console.log('Error in createListing():', err.stack);
        cb(err, null);
      } else {

        let queryImages = 'INSERT INTO images (list_id, img_url, img_desc) VALUES ';

        for (let i = 0; i < images.length; i++) {
          queryImages += `(${listingsRes.rows[0].list_id}, '${images[i].url}', '${images[i].desc}'),`;
        }
        queryImages = queryImages.substring(0, queryImages.length - 1) + ';';
        console.log('queryImages: ', queryImages);

        // Insert into images second
        pool.query(queryImages, (err, imagesRes) => {
          if (err) {
            console.log('Error in createListing():', err.stack);
            cb(err, null);
          } else {
            cb(null, imagesRes);
          }
        });
      }
    });

  }
};