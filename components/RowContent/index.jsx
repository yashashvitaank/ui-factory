import React, { useState } from "react";
import Button from "../Button";
import styles from "./styles.module.scss";
import { ApiRequest } from "@/utils/ajax";
import { toast } from "react-toastify";

function RowContent(props) {
  const { id, name, author, markup, setComponents, index, components } = props;
  const [isProcessing, setIsProcessing] = useState(false);
  const insertComponent = async () => {
    setIsProcessing(true);
    const data = JSON.stringify(props);
    const res = await ApiRequest.post("/api/insert-ui", data);
    if (res.status === 200) {
      const tempArray = [...components];
      tempArray.splice(index, 1);
      setComponents(tempArray);
    }
    setIsProcessing(false);
    toast.info("Added!");
  };

  const deleteComponent = async () => {
    setIsProcessing(true);
    const data = JSON.stringify(props);
    const res = await ApiRequest.post("/api/delete-ui", data);
    if (res.status === 200) {
        const tempArray = [...components];
        tempArray.splice(index, 1);
        setComponents(tempArray);
      }
      setIsProcessing(false);
      toast.info("Removed!");
  }

  return (
    <div className={styles.grid}>
      <div>{name}</div>
      <div>{author}</div>
      <div>{markup}</div>
      <Button
        name="Add"
        style={{ width: "50%", borderRadius: "8px" }}
        onSubmitHandler={insertComponent}
        isProcessing={isProcessing}
      />
      <Button name="Remove" style={{ width: "50%", borderRadius: "8px" }}
        onSubmitHandler={deleteComponent}
        isProcessing={isProcessing} />
    </div>
  );
}

export default RowContent;
