const pool = require('../pool.js');

module.exports = {
  // id = random integer between 1 and 2,000,000
  updateTitle: function(id, newTitle, cb) {
    let query = `
    UPDATE listings
    SET title='${newTitle}'
    WHERE list_id=${id};
    `;
    console.log(query);

    pool.query(query, (err, res) => {
      if (err) {
        console.log('Error in updateTitle():', err.stack);
        cb(err.stack, null);
      } else {
        cb(null, res.rows);
      }
    });

  }
};