'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-noop-renderer-server.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-noop-renderer-server.development.js.js.js');
}
