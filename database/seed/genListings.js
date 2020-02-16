const csv = require('@fast-csv/format');
const faker = require('faker');
const path = require('path');

module.exports = {
  csv: function(numOfRows) {
    let rows = [[ 'title', 'imageId' ]];

    for (let i = 0; i < numOfRows; i++) {
      rows.push([ faker.commerce.productName(), i ]);
    }

    csv.writeToPath(path.resolve(__dirname, 'listings.csv'), rows)
      .on('error', err => console.error(err))
      .on('finish', () => console.log('listings.csv generated!'));
  }
};

/*
const rows = [
  [ 'a', 'b' ],
  [ 'a1', 'b1' ],
  [ 'a2', 'b2' ],
];

csv.writeToPath(path.resolve(__dirname, 'tmp.csv'), rows)
  .on('error', err => console.error(err))
  .on('finish', () => console.log('CSV file with 2 rows generated!.'));
*/