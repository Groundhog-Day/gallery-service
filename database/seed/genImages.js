const csv = require('@fast-csv/format');
const faker = require('faker');
const path = require('path');

// k = min
// x = max
let rndInt = function (k, y) {
  return Math.floor(Math.random() * (y - k + 1) ) + k;
};

module.exports = {
  csv: function(numOfRows) {
    let rows = [[ 'imageSet', 'imgUrl', 'imgDesc' ]];

    for (let i = 0; i < numOfRows; i++) {
      let x = rndInt(4, 13);
      for (let j = 0; j < x; j++) {
        rows.push([ i, faker.image.city(), faker.hacker.phrase() ]);
      }
    }

    csv.writeToPath(path.resolve(__dirname, 'images.csv'), rows)
      .on('error', err => console.error(err))
      .on('finish', () => console.log('images.csv generated!'));
  },

  insertion: function() {
    // insert into tables with chunks of 10,000
  }
};