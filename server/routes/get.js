const db = require('../../database/db.js');
const express = require('express');
const getRoutes = express.Router();

getRoutes.get('/api/:id', (req, res) => {
  console.log('given ID: ', req.params.id);

  db.readId(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(data));
    }
  });
});

module.exports = getRoutes;