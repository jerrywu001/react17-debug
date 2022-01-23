'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-unstable-cache.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-unstable-cache.development.js.js.js');
}
