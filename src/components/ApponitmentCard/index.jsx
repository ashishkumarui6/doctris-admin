import React from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import InputField from "../../ui/widgets/InputField";
import Button from "../../ui/widgets/Button";
const ApponitmentCard = () => {
  const Disptch = useDispatch();

  const isModalName = useSelector((state) => state.ui.isModalName);
  return (
    <div>
      <div className={styles.modal_header}>
        <h4 className={styles.modal_header_left}>Book an Appointment</h4>
        <div
          className={styles.header_right}
          onClick={() => Disptch(uiActions.onModalOpen({ name: "" }))}
        >
          <IoMdClose size={25} />
        </div>
      </div>
      <div className={styles.modal_body}>
        <div className={styles.body_content}>
          <div className={styles.input_full}>
            <div>Patient Name *</div>
            <InputField placeholder="Patient Name :" />
          </div>
          <div className={styles.mid_box}>
            <div className={styles.input_mid}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Departments</div>
                <div>
                  <InputField placeholder="Patient Name :" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Doctor</div>
                <div>
                  <InputField placeholder="Patient Name :" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Your Email *</div>
                <div>
                  <InputField placeholder="Your email :" />
                </div>
              </div>
            </div>
            <div className={styles.input_mid}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Your Phone *</div>
                <div>
                  <InputField placeholder="Your Phone :" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Date :</div>
                <div>
                  <InputField placeholder="dd-mm-yyyy :" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Time :</div>
                <div>
                  <InputField placeholder="03:30 PM :" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.input_top}>
            <div style={{ marginBottom: "0.5rem" }}>Comments *</div>
            <InputField placeholder="Your Message :" />
          </div>
          <div className={styles.btn}>
            <Button name="Book An Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApponitmentCard;
