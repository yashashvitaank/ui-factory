'use client'
import styles from "./styles.module.scss";
import Input from "../Input";
import { Children, useState } from "react";
import axios from "axios";

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
    },
    {
      label: "Author",
      type: "text",
      placeholder: "Enter author",
      width: "100%",
      name: "author",
    },
  ];
  const handleSubmit = async () => {
    const { name, markup, author } = inputState;

    const requestObject = {
      url: "/api/users",
      method: "post",
      data: JSON.stringify(inputState),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const resp = await axios(requestObject);
    console.log("response", resp);
  };

  const onChangeHandler = (e, name) => {
    setInputState({...inputState, [name]: e?.target?.value});
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form>
          {Children.toArray(
            attributes.map((attribute) => {
              return (
                <Input
                  {...attribute}
                  onChangeHandler={onChangeHandler}
                />
              );
            })
          )}
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ComponentForm;
