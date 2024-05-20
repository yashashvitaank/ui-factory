"use client";
import React, { Children } from "react";
import styles from "./styles.module.scss";
import TitleContent from "./TitleContent";
import Loader from "../Loader";
import ComponentCard from "./ComponentCard";
import BottomContent from "../BottomContent";
function UIElement({ component }) {
  const details = Object.assign({}, ...component);
  const {markup, author, name, views} = details;
  // console.log("debug component", markup);
  return markup ? (
    <div className={styles.container}>
      <TitleContent name={name} author={author} />
      <ComponentCard markup={markup} />
      <BottomContent views={views} />
    </div>
  ) : <Loader/>;

}

export default UIElement;