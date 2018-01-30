const config = require('../../config')
const newrelic = config.newRelic.enabled ? require('newrelic') : undefined

function newRelicIsAvailable(res) {
  return !!newrelic
}

function getRequestIdFromResponse(res) {
  return res._headers['x-request-id']
}

module.exports = {
  injectRequestId: function() {
    return function(req, res, next) {
      if (newRelicIsAvailable())
        newrelic.addCustomParameter(
          'x-request-id',
          getRequestIdFromResponse(res)
        )

      next()
    }
  },

  injectControllerName: function(name) {
    return function(req, res, next) {
      if (newRelicIsAvailable()) newrelic.setControllerName(name)
      next()
    }
  },
}
