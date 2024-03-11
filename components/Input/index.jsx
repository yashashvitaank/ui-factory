import React from "react";
import styles from "./styles.module.scss";
function Input(props) {
  const { onChange = () => {}, name } = props;
  const isTextArea = props.type === "textarea";

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="input" className={styles.inputLabel}>
        {props.label}
      </label>
      {isTextArea ? (
        <textarea
          name={props.name}
          onChange={onChange}
        />
      ) : (
        <input
          onChange={onChange}
          name={props.name}
          type={props.type}
          className={`${styles.inputBox} ${props.input}`}
          placeholder={props.placeholder}
          pattern={props.pattern}
          title={props.title}
          minLength={props.min}
          required
        />
      )}
    </div>
  );
}

export default Input;
