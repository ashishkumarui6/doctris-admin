import React from "react";
import styles from "./index.module.css";
const Modal = ({ children }) => {
  return <div className={styles.modal_content}>{children}</div>;
};

export default Modal;
