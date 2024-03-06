import React from "react";
import styles from "./styles.module.scss";
function Input(props) {
  const { onChangeHandler, name } = props;
  const isTextArea = props.type === "textarea";

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="input" className={styles.inputLabel}>
        {props.label}
      </label>
      {isTextArea ? (
        <textarea
          name={props.name}
          onChange={(e) => onChangeHandler(e, props.name)}
        />
      ) : (
        <input
          onChange={(e) => onChangeHandler(e, props.name)}
          name={props.name}
          type={props.type}
          className={`${styles.inputBox} ${props.input}`}
          placeholder={props.placeholder}
          style={{ width: props.width, background: props.background, ...props.style}}
          pattern={props.pattern}
          title={props.title}
          required
        />
      )}
    </div>
  );
}

export default Input;
