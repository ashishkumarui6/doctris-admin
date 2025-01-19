import React from "react";
import styles from "./index.module.css";
const toggleBtn = ({ name }) => {
  return (
    <>
      <div className={styles.button}>{name}</div>
    </>
  );
};

export default toggleBtn;
