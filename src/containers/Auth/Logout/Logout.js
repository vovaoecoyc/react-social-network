import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../../../store/actions'
import styles from './Logout.module.css'

function Logout(props) {
  return (
    <div className={styles.logout}>
      <h1>Logout</h1>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: dispatch(logout())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Logout)
