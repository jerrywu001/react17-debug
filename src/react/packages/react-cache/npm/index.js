'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-cache.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-cache.development.js.js.js');
}
