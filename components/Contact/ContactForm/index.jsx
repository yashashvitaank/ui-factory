"use client"
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import Input from '@/components/Input'
import Button from '@/components/Button'
import { ApiRequest } from '@/utils/ajax'
import { toast } from 'react-toastify'

function ContactForm(props) {
  const [inputData, setInputData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onChangeHandler = (e) => {
    const name = e?.target?.name;
    setInputData({ ...inputData, [name]: e?.target?.value });
  };
  const onSubmitHandler = async () => {
    try{
      setIsSubmitting(true);
      const data = JSON.stringify(inputData);
      const res = await ApiRequest.post("/api/user-contact", data);
      if (res.status === 200) {
        toast("Your query has been submitted successfully :)");
      }
      else if (res.status === 500) {
        toast.error("Something went wrong. Try again");
      }
    }
    catch(e) {
      console.log(e);
    }
    finally {
      setIsSubmitting(false);
    }
  }
  return (
    <form className={styles.formContainer} onSubmit={(e)=>{e.preventDefault()}}>
        <div className={styles.inputContainer}>
            <Input label="Name" placeholder="Enter your name" width="150px" type="text" pattern='^[A-Za-z]+$' title='Enter a valid name using alphabets only' name="name" onChange={onChangeHandler}/>
            <Input label="Email" placeholder="Enter your email" width="150px" type="email" name="email" onChange={onChangeHandler}/>
        </div>
        <textarea name="remarks" cols="50" rows="5" placeholder='Enter your questions, suggestion or remarks here...' className={styles.text}  onChange={onChangeHandler}></textarea>
        <Button name="submit" bordered="true" onSubmitHandler={onSubmitHandler} isProcessing={isSubmitting}  />
    </form>
  )
}

export default ContactForm