'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-server-flight-server-runtime.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-server-flight-server-runtime.development.js.js.js');
}
