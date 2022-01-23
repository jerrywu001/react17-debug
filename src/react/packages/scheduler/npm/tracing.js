'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/scheduler-tracing.production.min.js.js.js');
} else {
  module.exports = require('./cjs/scheduler-tracing.development.js.js.js');
}
