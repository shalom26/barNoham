"use strict";
const arg = require('yargs').argv;
let ENV = process.env.NODE_ENV || 'development';
if (arg['environment']) {
	ENV = arg['environment'];
}
module.exports = ENV;
console.info(`Runnning for ${ENV} environment`);


