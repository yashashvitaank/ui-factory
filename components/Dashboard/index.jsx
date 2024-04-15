"use client";
import React, { useEffect, useState, Children } from "react";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

import { ApiRequest } from "@/utils/ajax";

import styles from "./styles.module.scss";
import next from "next";
import ComponentBox from "./ComponentBox";
import IntroTitle from "../IntroTitle";

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
      <IntroTitle />
      <div className={styles.componentsGrid}>
        {response.length ? (
          Children.toArray(
            response.map((item) => {
              return item.markup ? <ComponentBox {...item} /> : null;
            })
          )
        ) : (
          <p>no components</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
