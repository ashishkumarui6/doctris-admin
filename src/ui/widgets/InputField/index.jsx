import React from "react";
import styles from "./index.module.css";
const InputField = ({ type, placeholder, onChange }) => {
  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputField;
