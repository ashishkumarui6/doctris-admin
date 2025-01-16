import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import styles from "./index.module.css";

import DoctorsCrad from "../../components/DoctorsCard";

const Doctors = () => {
  return (
    <>
      <div>
        <div>
          <SectionTitle name="Doctors" />
        </div>
        <DoctorsCrad />
      </div>
    </>
  );
};

export default Doctors;
