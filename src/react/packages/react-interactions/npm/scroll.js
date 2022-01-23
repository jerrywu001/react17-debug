'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-interactions-events/scroll.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-interactions-events/scroll.development.js.js.js');
}
