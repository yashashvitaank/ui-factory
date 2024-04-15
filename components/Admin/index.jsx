'use client'
import { useEffect, useState } from "react";
import { ApiRequest } from "@/utils/ajax";
import { Children } from "react";
import styles from "./styles.module.scss";
import RowContent from "../RowContent";

function Admin() {
  const [components, setComponents] = useState([]);

  const fetchData = async () => {
    const response = await ApiRequest.get("/api/review-components");
    setComponents(response.data);
  };
  console.log(components);

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      {Children.toArray(
        components.map((component, index) => {
          return(
            <RowContent {...component} index={index} setComponents={setComponents} components={components} />
          )
        })
      )}
    </div>
  );
}

export default Admin;
