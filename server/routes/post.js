const db = require('../../database/queries/create.js');
const express = require('express');
const postRoutes = express.Router();

postRoutes.post('/api/listing/new', (req, res) => {

/*

    --- ---
    --- DESCRIPTION:
    --- ---

    createListing() creates a new property listing in the database with the provided user data, and returns an HTTP code response.

    --- ---
    --- PARAMETERS:
    --- ---

    createListing(object, callback(err, response))

    1. object, must contain the following properties:
      {
        title: String,
        images: Array<{ url: String, desc: String }...>
      }

    2. callback function, which gets passed the following:
        - err
          - either an error from the database query
          - or `null` if there is no error
        - queryRs
          - response from the database query

*/
  db.createListing(req.body, (err, queryRs) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('create operation successful!');
      res.sendStatus(200);
    }
  });

});

module.exports = postRoutes;