import React, { useEffect, useState, Children } from "react";
import { useRouter } from "next/navigation";
import parse from 'html-react-parser';

import Loader from "../Loader";

import { ajax } from "@/utils/ajax";

import styles from "./styles.module.scss";

function Dashboard() {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const router = useRouter();
  const handleRoute = (id) => {
    router.push(`/ui-factory/user/${id}`);
  };
  const fetchData = async () => {
    setLoading(true);
    const requestObject = { url: "/api/hello", method: "get" };
    const response = await ajax(requestObject);
    setResponse(response.items);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      {Children.toArray(
            response.map((item)=>{
                return <div className={styles.componentDiv}>
                  <div className={styles.component}>{parse(item.markup)}</div>
                  {/* <div className={styles.details}>{item.component} <br></br>{item.author}</div> */}
                </div>
            })
        )}
    </div>
  );
}

export default Dashboard;
