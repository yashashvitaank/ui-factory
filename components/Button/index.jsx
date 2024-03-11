'use client'
import React from 'react'
import styles from "./styles.module.scss"
function Button(props) {
  const { onSubmitHandler = () => {} } = props
  return (
    <>
        <button type="submit" className={`${styles.button} ${styles.filled}`} style={props.style} onClick={onSubmitHandler}>{props.name}</button>
    </>
  )
}

export default Button