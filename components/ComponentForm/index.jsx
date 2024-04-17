"use client";
import styles from "./styles.module.scss";
import Input from "../Input";
import { Children, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ApiRequest } from "@/utils/ajax";
import Form from "../Form";

function ComponentForm() {
  const [inputState, setInputState] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
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
      rows: 10,
      resize: "none",
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
    try {
      setIsProcessing(true);
      const hasNullOrUndefined = Object.values(formData).some(
        (value) => value === null || value === undefined
      );
      if (hasNullOrUndefined) {
        toast.error("Please fill all data");
      }
      else{
      console.log("Component form data.....", formData);
      const data = JSON.stringify(formData);
      const res = await ApiRequest.post("/api/components", data);
      if (res.status === 200) {
        toast("Component added successfully!", {
          position: "top-center",
        });
      } else if (res.status === 500) {
        toast.error("Couldn't add the component.");
      }}
    } catch (err) {
      toast.error("Oops! Something went wrong. Please try again");
    } finally {
      setIsProcessing(false);
    }
  };
  const onChangeHandler = (e, name) => {
    setInputState({ ...inputState, [name]: e?.target?.value });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.heading}>Welcome! What&apos;ve you got for all frontend peeps this time?</div>
        <Form
          inputField={attributes}
          buttonName="Submit"
          onSubmitHandler={onSubmitHandler}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
}

export default ComponentForm;
