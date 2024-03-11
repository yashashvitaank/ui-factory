import React, { Children, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styles from "./styles.module.scss";

function Form(props) {
  const { inputField } = props;
  const [inputData, setInputData] = useState({});

  const onChangeHandler = (e) => {
    const name = e?.target?.name;
    setInputData({ ...inputData, [name]: e?.target?.value });
  };

  return (
    <form action="#" className={styles.form} onSubmit={(e)=>{e.preventDefault()}}>
      {Children.toArray(
        inputField.map((attributes) => (
          <Input {...attributes} onChange={onChangeHandler} />
        ))
      )}
      <Button
        name={props.buttonName}
        onSubmitHandler={() => {
          props.onSubmitHandler(inputData);
        }}
      />
    </form>
  );
}

export default Form;
