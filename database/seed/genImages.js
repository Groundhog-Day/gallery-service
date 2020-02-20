const pool = require('../pool.js');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

let PATH_CSV = path.resolve(__dirname, 'images.csv');

// k = min, x = max
// let rndInt = function (k, y) {
//   return Math.floor(Math.random() * (y - k + 1) ) + k;
// };

module.exports = {
  seed: function() {
    console.log('writing images CSV...  ', Date.now());

    const writeStream = fs.createWriteStream(PATH_CSV);
    writeStream.write('imgSet,imgUrl,imgDesc\n', 'utf8');

    const genImages = function(writer, encoding, callback) {
      let i = 10000000;
      let id = 0;
      let imgSet = 1;

      const write = function() {
        let ok = true;
        do {
          i--;
          id++;

          const data = `${imgSet}|${faker.image.business()}|${faker.hacker.phrase()}\n`;

          if (id % 5 === 0 ) {
            imgSet++;
          }

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

    genImages(writeStream, 'utf-8', () => {
      console.log('images CSV created! Initiate insertion process', Date.now());
      this.insertion();
      writeStream.end();
    });
  },

  insertion: function() {
    let query = `copy images (imgSet, imgUrl, imgDesc) from '${PATH_CSV}' delimiter '|' csv header;`;

    pool.query(query, (err, res) => {
      if (err) {
        console.log('Error in images.insertion: ', err.stack);
      } else {
        console.log(`successfully inserted ${PATH_CSV}! ${Date.now()}`);
      }
    });
  }
};