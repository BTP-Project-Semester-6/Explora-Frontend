import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import { homeObjOne, homeObjThree, homeObjTwo } from "./data";
import Infosection from "./infosection";
import Footer from "./../../Components/Footer/Footer";

const Landing = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <Navbar />
      <Infosection {...homeObjOne} />
      <Infosection {...homeObjTwo} />
      <Infosection {...homeObjThree} />
      <Footer />
    </div>
  );
};

export default Landing;
