import React from "react";
import styles from "./index.module.css";
import doctor_img from "../../assets/doctor.jpg";
const DoctorsCrad = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_card}>
          <div className={styles.card}>
            <img src={doctor_img} alt="" />
            <ul>
              <li></li>
            </ul>
          </div>
          <div className={styles.text_content}>
            <a>Dr. Calvin Carlo</a>
            <small>Eye Care</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCrad;
