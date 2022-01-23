'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-server-flight.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-server-flight.development.js.js.js');
}
