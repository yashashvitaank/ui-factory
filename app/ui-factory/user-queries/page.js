"use client";
import { RootLayoutContext } from "@/app/layout";
import Loader from "@/components/Loader";
import { ApiRequest } from "@/utils/ajax";
import React, { Children, useContext, useEffect, useState } from "react";

function UserQueries() {
  const [queries, setQueries] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const {setIsAdmin} = useContext(RootLayoutContext);
  const fetchData = async () => {
    setIsProcessing(true);
    const res = await ApiRequest.get("/api/view-queries");
    setQueries(res.data);
    setIsProcessing(false);
  };

  useEffect(() => {
    fetchData();
    setIsAdmin(true);
  },[]);

  return isProcessing ? <Loader /> :(
    <div>
        <p style={{textAlign: "center", fontSize:"2rem", fontWeight: "700"}}>Queries from Users</p>
      {Children.toArray(
        queries.map((query) => {
          return (
            <div style={{display: "grid", gridTemplateColumns:"auto auto auto auto", padding:"2rem", backgroundColor:"#0F0E0E", margin: "1rem", borderRadius:"8px"}}>
              <div>{query.name}</div>
              <div>{query.email}</div>
              <div>{query.remarks}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default UserQueries;
