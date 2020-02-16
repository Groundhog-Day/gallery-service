module.exports = {
  // id = randomly generated accommodation id from front-end
  readId: function(id, cb) {
    result = {};
    db.query(`SELECT * FROM images where accommodationId=${id};`, (err, data) => {
      if (err) {
        cb(err);
      } else {
        result.imgArr = data;
        db.query(`SELECT name FROM accommodations where id=${id};`, (err, data) => {
          if (err) {
            cb(err);
          } else {
            result.name = data[0].name;
            cb(null, result);
          }
        });
      }
    });
  }
};