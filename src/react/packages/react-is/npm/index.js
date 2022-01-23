'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-is.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-is.development.js.js.js');
}
