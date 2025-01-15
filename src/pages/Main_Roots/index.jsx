import React from "react";
import Header from "../../helper/Header";
import Footer from "../../helper/footer";

const Main_Roots = ({ element }) => {
  return (
    <>
      <Header />
      <div>{element}</div>
      <Footer />
    </>
  );
};

export default Main_Roots;
