'use strict'

const express = require('express')
const path = require('path')

const config = require('../config')
const newRelicMiddleware = require('./middleware/newrelic')

const router = express.Router()
router.use('/assets', express.static(path.resolve(__dirname, '../dist')))

router.get(
  '/logout',
  newRelicMiddleware.injectControllerName('Signout'),
  function(req, res) {
    res.redirect(config.auth.signoutUrl)
  }
)

router.get('/test500', (req, res, next) => {
  next(new Error('This is a fake error for testing the 500 error page.'))
})

router.use('*', newRelicMiddleware.injectControllerName(`${config.appName}-UI`))

router.get('*', function(req, res) {
  res.render('index', {
    assets: config.assets,
    dtmUrl: config.externalContexts.adobe.dtmUrl,
    initialState: {
      //This initialState object can be used to populate Redux state with initial values on app load
    },
    prism: config.prism,
    segment: config.segment,
    urlMountPoint: config.server.urlMountPoint,
  })
})

module.exports = router
