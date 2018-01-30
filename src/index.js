import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app'
import './styles.scss'

render(
  <Router>
    <Route path={URL_MOUNT_POINT} component={App} />
  </Router>,
  document.getElementById('ps-main')
)
