const pool = require('../pool.js');
const listings = require('./genListings.js');
const images = require('./genImages.js');

// Call the CSV generators
listings.csv(50);
images.csv(50);

// Insert the CSV files




/*
===========================================================
NOTES:
============================================================

var dataToWrite;
var fs = require('fs');

fs.writeFile('form-tracking/formList.csv', dataToWrite, 'utf8', function (err) {
  if (err) {
    console.log('Some error occured - file either not saved or corrupted file saved.');
  } else{
    console.log('It\'s saved!');
  }
});

========================================================= */