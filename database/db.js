const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

module.exports.readId = function(id, cb) {
  db.query(`SELECT * FROM images where accomodationId=${id}`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};