'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-dom-server.node.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-dom-server.node.development.js.js.js');
}
