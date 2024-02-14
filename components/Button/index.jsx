import React from 'react'
import styles from "./styles.module.scss"
function Button(props) {
  return (
    <>
        <button className={`${styles.button} ${props.bordered} ? ${styles.bordered} : ${styles.filled}`}>{props.name}</button>
    </>
  )
}

export default Button