const pool = require('../pool.js');
const listings = require('./genListings.js');
const images = require('./genImages.js');

// Call the CSV generators (+1 to the input number)
// listings.csv(11);
images.csv(1000000);

// Insert the CSV file

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