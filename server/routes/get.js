const db = require('../../database/queries/read.js');
const express = require('express');
const getRoutes = express.Router();

getRoutes.get('/api/:id', (req, res) => {
  db.readId(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(`get request served w/ list_id: ${req.params.id}`);
      res.send(data);
    }
  });
});

module.exports = getRoutes;