import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from './index.scss'

const Home = props => {
  console.log(styles)
  return (
    <div>
      <Helmet title="Home" />
      <div className={styles.hero} />
      <h1>
        Hello <span className={styles.yellow}>world</span>
      </h1>
    </div>
  )
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
}

export default Home
