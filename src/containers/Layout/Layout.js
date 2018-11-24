import React, { Fragment } from 'react'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'

function Layout(props) {
  return (
    <Fragment>
      <Toolbar />
      <main className={styles.content}>{props.children}</main>
    </Fragment>
  )
}

export default Layout
