var config = require('./config')

exports.config = {
  app_name: config.newRelic.appName,
  license: config.newRelic.license,
  logging: config.newRelic.logging,
  capture_params: true,
}
