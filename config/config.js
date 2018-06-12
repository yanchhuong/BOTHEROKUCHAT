module.exports = require('./environments/' + process.env.NODE_ENV + '.js');
console.log(process.env.NODE_ENV);