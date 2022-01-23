'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-transport-dom-webpack-server.node.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-transport-dom-webpack-server.node.development.js.js.js');
}
