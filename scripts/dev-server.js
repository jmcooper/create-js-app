'use strict'

import webpack from 'webpack'
import bs from 'browser-sync'
import open from 'open'

import config from '../config'
import server from '../server/server'
import webpackConfig from '../webpack.config.js'

const compiler = webpack(webpackConfig)

bs.create()

let browserSyncActive = false
let serverActive = false
let assetsActive = false

function launchOrRefreshBrowserSync() {
  if (browserSyncActive) return bs.reload()
  if (!serverActive || !assetsActive) return

  const browserSyncConfig = {
    host: 'localhost',
    port: +process.env.PORT + 1,
    ui: {
      port: +process.env.PORT + 2,
    },
    notify: false,
    open: false,
    proxy: 'http://' + server.address().address + ':' + server.address().port,
    socket: {
      domain: 'app-dev.pluralsight.com',
    },
  }

  bs.init(browserSyncConfig)

  browserSyncActive = true
  if (process.env.DEV_SERVER_URL) {
    setTimeout(() => open(process.env.DEV_SERVER_URL), 1000)
  }
}

server.on('listening', function() {
  serverActive = true
  launchOrRefreshBrowserSync()
})

compiler.watch({}, function(err, stats) {
  if (err) return console.error(err)

  console.log('\n' + stats.toString() + '\n')

  assetsActive = true
  launchOrRefreshBrowserSync()
})
