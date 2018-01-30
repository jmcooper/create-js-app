const path = require('path')

const express = require('express')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const requestId = require('connect-requestid')
const healthCheck = require('@pluralsight/ps-express-health')
const manifestHelpers = require('express-manifest-helpers').default

const config = require('../config')
const loggerMiddleware = require('./middleware/logger')
const newRelicMiddleware = require('./middleware/newrelic')
const router = require('./router')

const app = express()
const distDir = path.join(__dirname, 'dist')

app.set('trust proxy', true)

app.set('views', config.server.viewsDirectory)
app.set('view engine', 'pug')

app.use(requestId)
app.use(newRelicMiddleware.injectRequestId())
app.use(loggerMiddleware(config.bunyan))
// app.use(favicon(path.join(publicDir, 'favicon.ico')))
app.use(cookieParser())

app.use(
  manifestHelpers({
    manifestPath: path.join(
      config.assets.publicDir,
      config.assets.manifestName
    ),
    cache: config.assets.cache,
    prependPath: config.assets.publicPath,
  })
)

app.use(
  `${config.server.urlMountPoint}/health-check`,
  newRelicMiddleware.injectControllerName('HealthCheck'),
  healthCheck()
)

app.use(config.server.urlMountPoint, router)

app.get('/', newRelicMiddleware.injectControllerName('Index'), function(
  req,
  res,
  next
) {
  res.redirect(config.server.urlMountPoint)
})

app.use(require('./middleware/not-found-error'))
app.use(require('./middleware/handle-unauthorized'))
app.use(require('./middleware/server-error'))

module.exports = app
