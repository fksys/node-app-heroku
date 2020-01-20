/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  // production
  module.exports = require('./prod');
} else {
  // development environment
  module.exports = require('./dev');
}
