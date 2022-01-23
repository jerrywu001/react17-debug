'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-fetch.node.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-fetch.node.development.js.js.js');
}
