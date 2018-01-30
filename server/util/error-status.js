'use strict'

const R = require('ramda')

module.exports = {
  getStatusFromError: function(err) {
    if (!err) return 0
    if (err.code) return parseInt(err.code)
    if (err.status) return parseInt(err.status)
    if (R.path(['response', 'status'], err)) return err.response.status
    return 0
  },
}
