// Setup
require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const getRoutes = require('./routes/get.js');
const postRoutes = require('./routes/post.js');
const putRoutes = require('./routes/put.js');
const deleteRoutes = require('./routes/delete.js');

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

// Create / POST
app.use('/', postRoutes);

// Read / GET
app.use('/', getRoutes);

// Update / PUT
app.use('/', putRoutes);

// Delete / DELETE
app.use('/', deleteRoutes);

// Initialisation
app.listen(port, () => {
  console.log(`aircarousel Listening on port: http://localhost:${port}`);
});