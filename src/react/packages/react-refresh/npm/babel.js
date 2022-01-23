'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-refresh-babel.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-refresh-babel.development.js.js.js');
}
