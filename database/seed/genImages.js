const pool = require('../pool.js');
const csv = require('@fast-csv/format');
const faker = require('faker');
const path = require('path');

// k = min, x = max
let rndInt = function (k, y) {
  return Math.floor(Math.random() * (y - k + 1) ) + k;
};

module.exports = {
  csvCount: 1,
  seed: function(numOfRows, chunk) {
    console.log(Date.now());

    // Generate CSV data
    let rows = [];

    for (let i = 1; i < numOfRows; i++) {

      if (i % chunk === 0) {
        this.csvWrite(`images${this.csvCount}.csv`, rows);
        this.csvCount++;
        rows = [];
      }

      let x = rndInt(4, 7);

      for (let j = 0; j < x; j++) {
        rows.push([ i, faker.image.city(), faker.hacker.phrase() ]);
      }
    }
  },

  csvWrite: function(pathToCSV, rows) {
    // Write to provided .csv file
    csv.writeToPath(path.resolve(__dirname, pathToCSV), rows)
      .on('error', err => console.error(err))
      .on('finish', () => {
        console.log(Date.now());
        console.log(pathToCSV, 'generated!');
        this.insertion(pathToCSV);
      });
  },

  insertion: function(pathToCSV) {
    // inserts CSV into PostgreSQL
    let query = `copy images (imgSet, imgUrl, imgDesc) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/${pathToCSV}' delimiter ',' csv header;`;

    pool.query(query, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(Date.now());
        console.log(`successfully inserted ${pathToCSV}! `);
      }
    });

  }
};

// copy listings (title, imgId) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/listings.csv' delimiter ',' csv header;

// copy images (imgSet, imgUrl, imgDesc) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/images.csv' delimiter ',' csv header;