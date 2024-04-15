'use client'
import styles from "./styles.module.scss";
import Input from "../Input";
import { Children, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ApiRequest } from "@/utils/ajax";
import Form from "../Form";

function ComponentForm() {
  const [inputState, setInputState] = useState({});

  const attributes = [
    {
      label: "Component name",
      type: "text",
      placeholder: "Component name",
      width: "100%",
      name: "name",
    },
    {
      label: "Markup",
      type: "textarea",
      placeholder: "Enter your markup",
      width: "100%",
      name: "markup",
      column: 20,
      resize: "none"
    },
    {
      label: "Author",
      type: "text",
      placeholder: "Enter author",
      width: "100%",
      name: "author",
    },
  ];
  const onSubmitHandler = async (formData) => {
    console.log("Component form data.....", formData);
    const data = JSON.stringify(formData);
    const res = await ApiRequest.post("/api/components", data);
  };

  const onChangeHandler = (e, name) => {
    setInputState({...inputState, [name]: e?.target?.value});
  }

  useEffect(()=>{
    toast.success("Welcome Dev! Show your Magic!");
  });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Form inputField={attributes} buttonName="Submit" onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
}

export default ComponentForm;
