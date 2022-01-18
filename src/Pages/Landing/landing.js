import React from "react";

import { homeObjOne, homeObjThree, homeObjTwo } from "./data";
import Infosection from "./infosection";
import Footer from "./../../Components/Footer/Footer";
import Navbar from "../navbar/navbar";

const Landing = () => {
  return (
    <div>
      <Infosection {...homeObjOne} />
      <Infosection {...homeObjTwo} />
      <Infosection {...homeObjThree} />
      <Footer />
    </div>
  );
};

export default Landing;
