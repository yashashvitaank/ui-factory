'use client'
import UIElement from "@/components/UIElement";
import { useState, useEffect } from "react";
import { ApiRequest } from "@/utils/ajax";

function UIElementPage(props) {
  const id = props.params.id;
  const [component, setComponent] = useState([]);

  const fetchComponent = async () => {
    const data = JSON.stringify({id});
    console.log("debug data", data);
    const response = await ApiRequest.post("/api/specific-element", data);
    setComponent(response.data);
  };
  useEffect(() => {
    fetchComponent();
  }, [id]);
  return <UIElement component={component} />;
}

export default UIElementPage;
