"use client";

import Spinner from "../Spinner";
import styles from "./styles.module.scss";
function Button(props) {
  
  const { onSubmitHandler = () => {}, isProcessing, name} = props;
  return (
    <>
      <button
        type="submit"
        className={`${styles.button} ${styles.filled}`}
        style={props.style}
        onClick={onSubmitHandler}
        disabled={isProcessing}
      >
        {isProcessing ? <Spinner style={{width: "5px"}} /> : name}
      </button>
    </>
  );
}

export default Button;
