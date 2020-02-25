const pool = require('../pool.js');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

let PATH_CSV = path.resolve(__dirname, 'listings.csv');

module.exports = {
  seed: function() {
    console.log('writing listings CSV...  ', Date.now());

    const writeStream = fs.createWriteStream(PATH_CSV);
    writeStream.write('title\n', 'utf8');

    const genListings = function(writer, encoding, callback) {
      let i = 2000000;

      const write = function() {
        let ok = true;
        do {
          i--;

          const data = `${faker.commerce.productName()}\n`;

          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }
        } while (i > 0 && ok);
        if (i > 0) {
          writer.once('drain', write);
        }
      };
      write();
    };

    genListings(writeStream, 'utf-8', () => {
      console.log('listings CSV created! Initiate insertion process', Date.now());
      this.insertion();
      writeStream.end();
    });
  },

  insertion: function() {
    let query = `copy listings (title) from '${PATH_CSV}' csv header;`;

    pool.query(query, (err, res) => {
      if (err) {
        console.log('Error in listings.insertion: ', err.stack);
      } else {
        console.log(`successfully inserted ${PATH_CSV}! ${Date.now()}`);
      }
    });
  }
};