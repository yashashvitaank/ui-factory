"use client";
import React, { useEffect, useState, Children } from "react";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";

import Loader from "../Loader";

import { ApiRequest, ajax } from "@/utils/ajax";

import styles from "./styles.module.scss";
import next from "next";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const router = useRouter();
  const handleRoute = (id) => {
    router.push(`/ui-factory/user/${id}`);
  };
  const fetchData = async () => {
    setLoading(true);
    const responseComponents = await ApiRequest.get("/api/display");
    setResponse(responseComponents.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      {response.length ? (
        Children.toArray(
          response.map((item) => {
            return (
                item.markup ? (
                  <div className={styles.componentDiv}>
                  <div className={styles.component}>{parse(item.markup)}</div>
                  </div>
                ) : null
                // {/* <div className={styles.details}>{item.component} <br></br>{item.author}</div> */}
            );
          })
        )
      ) : (
        <p>no components</p>
      )}
    </div>
  );
}

export default Dashboard;
