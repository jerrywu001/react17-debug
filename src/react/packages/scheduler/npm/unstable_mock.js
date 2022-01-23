'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/scheduler-unstable_mock.production.min.js.js.js');
} else {
  module.exports = require('./cjs/scheduler-unstable_mock.development.js.js.js');
}
