import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import Home from './home'

const App = props => {
  return (
    <div>
      <Helmet titleTemplate="%s | Pluralsight Partnerships" />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

App.propTypes = {
  // dispatch: PropTypes.func.isRequired,
}

export default App
