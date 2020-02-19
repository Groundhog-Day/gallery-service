const pool = require('../pool.js');
const fastcsv = require('@fast-csv/format');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

const csvStream = fastcsv.format;

// var writeStream = fs.createWriteStream('./listings.csv', { flag: 'a' });

module.exports = {
  csvCount: 1,
  seed: function(numOfRows, chunk) {
    console.log(Date.now());

    // Generate CSV data
    let rows = [];
    for (let i = 1; i < numOfRows; i++) {

      if (i % 50 === 0) {
        this.csvWrite(`listings${this.csvCount}.csv`, rows);
        this.csvCount++;
        rows = [];
      }

      rows.push([ faker.commerce.productName(), i ]);
    }


  },

  csvWrite: function(pathToCSV, rows) {
    // Write to provided .csv file
    fastcsv.writeToPath(path.resolve(__dirname, pathToCSV), rows)
      .on('error', err => console.error(err))
      .on('finish', () => {
        console.log(Date.now());
        console.log(pathToCSV, 'generated!');
        this.insertion(pathToCSV);
      });
  },

  insertion: function(pathToCSV) {
    // inserts CSV into PostgreSQL
    let query = `copy listings (title, imgId) from '/Users/sean/Documents/hack-reactor/sdc/gallery-service/database/seed/${pathToCSV}' delimiter ',' csv header;`;

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