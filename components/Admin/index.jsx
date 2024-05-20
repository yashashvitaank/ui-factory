'use client'
import { useContext, useEffect, useState } from "react";
import { ApiRequest } from "@/utils/ajax";
import { Children } from "react";
import styles from "./styles.module.scss";
import RowContent from "../RowContent";
import Button from "../Button";
import { RootLayoutContext } from "@/app/layout";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Admin() {
  const [components, setComponents] = useState([]);
  const {setIsAdmin} = useContext(RootLayoutContext);
  const router = useRouter();
  const fetchData = async () => {
    const response = await ApiRequest.get("/api/review-components");
    setComponents(response.data);
  };
  console.log(components);

  const queriesPageHandler = () => {
    alert("inside Queries function");
    router.push();
  }

  useEffect(() => {
    fetchData();
    setIsAdmin(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      <div className={styles.linkWrapper}>
      <Link name="See Queries" className={styles.link} href="/ui-factory/user-queries">View Queries</Link>
      </div>
      <p style={{textAlign:"center", fontSize: "x-large", fontWeight: "700"}}>Components Contributed By Developers</p>
      {Children.toArray(
        components?.map((component, index) => {
          return(
            <RowContent {...component} index={index} setComponents={setComponents} components={components} />
          )
        })
      )}
    </div>
  );
}

export default Admin;
