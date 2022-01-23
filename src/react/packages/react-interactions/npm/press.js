'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-interactions-events/press.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-interactions-events/press.development.js.js.js');
}
