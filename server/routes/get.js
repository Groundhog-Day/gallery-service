const db = require('../../database/queries/read.js');
const express = require('express');
const getRoutes = express.Router();

getRoutes.get('/api/:id', (req, res) => {
  console.log('accomodationId: ', req.params.id);

  db.readId(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).end(JSON.stringify(data));
    }
  });
});

module.exports = getRoutes;