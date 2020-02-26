const pool = require('../pool.js');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

let PATH_CSV = path.resolve(__dirname, 'images.csv');

module.exports = {
  seed: function() {
    console.log('writing images CSV...  ', Date.now());

    const writeStream = fs.createWriteStream(PATH_CSV);
    writeStream.write('list_id,img_url,img_desc\n', 'utf8');

    const genImages = function(writer, encoding, callback) {
      let i = 10000000;
      let intFlag = 0;
      let imgSet = 1;
      let cat = 0;

      const write = function() {
        let ok = true;
        do {
          i--;
          intFlag++;
          cat++;

          const data = `${imgSet}|http://placekitten.com/200/300?image=${cat}|${faker.hacker.phrase()}\n`;

          if (intFlag % 5 === 0 ) {
            imgSet++;
          }

          if (cat === 16) {
            cat = 0;
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
    let query = `copy images (list_id, img_url, img_desc) from '${PATH_CSV}' delimiter '|' csv header;`;

    pool.query(query, (err, res) => {
      if (err) {
        console.log('Error in images.insertion: ', err.stack);
      } else {
        console.log(`successfully inserted ${PATH_CSV}! ${Date.now()}`);
        pool.query('ALTER TABLE images ADD FOREIGN KEY (list_id) REFERENCES public.listings (list_id);', (err, res) => {
          if (err) {
            console.log(err.stack);
          } else {
            console.log('foreign key added!');
          }
        });
      }
    });
  }
};