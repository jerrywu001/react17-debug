'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-transport-dom-webpack.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-transport-dom-webpack.development.js.js.js');
}
