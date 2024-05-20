"use client";
import { RootLayoutContext } from "@/app/layout";
import Loader from "@/components/Loader";
import { ApiRequest } from "@/utils/ajax";
import Back from "@assets/back.svg"
import Image from "next/image";
import Link from "next/link";
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
        <Link href="/ui-factory/admin-dashboard" style={{position: "fixed", top:"7rem", left:"3rem"}}><Image src={Back} alt="Back" width={30} height={30}/></Link>
        <p style={{textAlign: "center", fontSize:"2rem", fontWeight: "700"}}>Queries from Users</p>
        <div style={{display: "flex", justifyContent: "space-around", padding:"1rem", fontSize:"1.1rem", color: "#892CDC"}}>
          <p>Name</p>
          <p>Email</p>
          <p>Remarks</p>
        </div>
      {Children.toArray(
        queries.map((query) => {
          return (
            <div style={{display: "flex", justifyContent: "space-around", padding:"2rem", backgroundColor:"#0F0E0E", margin: "1rem", borderRadius:"8px"}}>
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
