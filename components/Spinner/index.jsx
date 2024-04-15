import React from 'react'
import styles from "./styles.module.scss"
function Spinner(props) {
  return (
    <div className={styles.loader} style={props.style}></div>
  )
}

export default Spinner