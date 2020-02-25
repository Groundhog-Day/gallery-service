const db = require('../../database/queries/update.js');
const express = require('express');
const putRoutes = express.Router();

putRoutes.put('/api/listing/update', ({ body }, res) => {
  db.updateTitle(body.id, body.title, (err, rows) => {
    if (err) {
      console.log('err in updateTitle(): ', err);
    } else {
      console.log('update operation successful!');
      res.sendStatus(200);
    }
  });
});

module.exports = putRoutes;