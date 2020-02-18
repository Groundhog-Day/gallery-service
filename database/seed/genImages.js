const pool = require('../pool.js');
const csv = require('@fast-csv/format');
const faker = require('faker');
const path = require('path');

// k = min, x = max
let rndInt = function (k, y) {
  return Math.floor(Math.random() * (y - k + 1) ) + k;
};

module.exports = {
  csv: function(numOfRows) {
    console.log(Date.now());
    // Generate CSV data
    let rows = [[ 'imgSet', 'imgUrl', 'imgDesc' ]];
    for (let i = 1; i < numOfRows; i++) {
      let x = rndInt(4, 7);
      for (let j = 0; j < x; j++) {
        rows.push([ i, faker.image.city(), faker.hacker.phrase() ]);
      }
    }
    // Write CSV file
    csv.writeToPath(path.resolve(__dirname, 'images.csv'), rows)
      .on('error', err => console.error(err))
      .on('finish', () => {
        console.log(Date.now());
        console.log('images.csv generated!');
        this.insertion();
      });
  },

  insertion: function() {
    // inserts the CSV file into
    let query = `copy images (imgSet, imgUrl, imgDesc) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/images.csv' delimiter ',' csv header;`;

    pool.query(query, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(Date.now());
        console.log('successfully inserted CSV! ', res.rows);
      }
    });

  }
};

// copy listings (title, imgId) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/listings.csv' delimiter ',' csv header;

// copy images (imgSet, imgUrl, imgDesc) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/images.csv' delimiter ',' csv header;