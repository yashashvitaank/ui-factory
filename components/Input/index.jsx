import React from 'react'
import styles from "./styles.module.scss"
function Input(props) {
  return (
    <div className={styles.inputWrapper}>
        <label htmlFor="input" className={styles.inputLabel}>{props.label}</label>
        <input type={props.type} className={styles.inputBox} placeholder={props.placeholder} style={{width:props.width}}/>
    </div>
  )
}

export default Input