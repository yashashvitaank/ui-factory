"use client"
import React from 'react'
import styles from "./styles.module.scss"
import Input from '@/components/Input'
import Button from '@/components/Button'

function ContactForm(props) {
  return (
    <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
            <Input label="Name" placeholder="Enter your name" width="220px" type="text" pattern='^[A-Za-z]+$' title='Enter a valid name using alphabets only'/>
            <Input label="Email" placeholder="Enter your email" width="220px" type="email"/>
        </div>
        <textarea name="suggestion" cols="50" rows="5" placeholder='Enter your questions, suggestion or remarks here...' className={styles.text}></textarea>
        <Button name="submit" bordered="true"/>
    </form>
  )
}

export default ContactForm