'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-reconciler.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-reconciler.development.js.js.js');
}
