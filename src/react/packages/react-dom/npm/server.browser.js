'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-dom-server.browser.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-dom-server.browser.development.js.js.js');
}
