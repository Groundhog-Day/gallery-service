const pool = require('../pool.js');
const csv = require('@fast-csv/format');
const faker = require('faker');
const path = require('path');

module.exports = {
  csv: function(numOfRows) {
    // Generate CSV data
    let rows = [[ 'title', 'imgId' ]];
    for (let i = 1; i < numOfRows; i++) {
      rows.push([ faker.commerce.productName(), i ]);
    }

    // Write CSV file
    csv.writeToPath(path.resolve(__dirname, 'listings.csv'), rows)
      .on('error', err => console.error(err))
      .on('finish', () => {
        console.log('listings.csv generated!');
        // Insert the CSV into Postgres
        this.insertion();
      });
  },
  count: 2,

  insertion: function() {
    // insert into tables with chunks of 10,000
  }
};