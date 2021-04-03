
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-hand.cjs.production.min.js')
} else {
  module.exports = require('./react-hand.cjs.development.js')
}
