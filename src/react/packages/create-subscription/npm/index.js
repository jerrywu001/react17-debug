'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/create-subscription.production.min.js.js.js');
} else {
  module.exports = require('./cjs/create-subscription.development.js.js.js');
}
