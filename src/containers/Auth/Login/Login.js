import React from 'react'
import { connect } from 'react-redux'

import { login } from '../../../store/actions'
import styles from './Login.module.css'

function Login(props) {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    login: dispatch(login())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
