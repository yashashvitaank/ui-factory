import React from "react";
import styles from "./styles.module.scss"
function IntroTitle() {
  return (
    <div className={styles.heading}>
      <div className={styles.title}>
      <p className={styles.titleText}>Open Source <span style={{color:"#BC6FF1"}}>UI Elements</span> Repo </p><div className={styles.loader}>UI</div>
      </div>
      <p className={styles.subTitle}>
        Get simple and basic html elements at one click for your frontend
        projects
      </p>
      <p className={styles.text}>Sign Up as Developer and contribute to this repo independently.</p>
    </div>
  );
}

export default IntroTitle;
