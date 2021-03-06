// Setup environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Dependencies
var config = require('./config/config');
var express = require('./config/express');
var colors = require('colors');
var index = require('./index');

//var chat= index();

// Create server
var app = express();

// Start listening
app.listen(process.env.port || process.env.PORT || config.PORT, function () {
  console.log(colors.green('Listening with ' + process.env.NODE_ENV + ' config on port ' + config.PORT));
});


