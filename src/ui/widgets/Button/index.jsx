import React from "react";
import styles from "./index.module.css";
const Button = ({ name }) => {
  return (
    <div className={styles.button}>
      <button>{name}</button>
    </div>
  );
};

export default Button;
