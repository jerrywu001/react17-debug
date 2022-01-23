'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-interactions-events/tap.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-interactions-events/tap.development.js.js.js');
}
