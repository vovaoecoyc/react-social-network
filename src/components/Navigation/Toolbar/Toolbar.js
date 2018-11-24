import React from 'react'

import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

function Toolbar(props) {
  return (
    <div className={styles.album}>
      <NavigationItems />
    </div>
  )
}

export default Toolbar
