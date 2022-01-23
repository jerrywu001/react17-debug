'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-transport-dom-webpack-server.browser.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-transport-dom-webpack-server.browser.development.js.js.js');
}
