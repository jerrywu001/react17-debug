'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-interactions-events/press-legacy.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-interactions-events/press-legacy.development.js.js.js');
}
