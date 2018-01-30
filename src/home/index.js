import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from './index.scss'

const Home = props => {
  return (
    <div>
      <Helmet title="Home" />
      <h1 className="{styles.yellow}">Hello world</h1>
    </div>
  )
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
}

export default Home
