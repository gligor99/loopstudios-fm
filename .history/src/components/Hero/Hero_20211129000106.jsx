import React from "react";
import Navbar from "../Navbar/Navbar";
import "./hero.css";

const Hero = ({toggle}) => {
  return (
      <div className="container">
        <Navbar toggle={true} />
        <div className="container-content">
          <h1 className="title">
            Immersive <br /> experiences <br />
            that deliver
          </h1>
        </div>
      </div>
  );
};

export default Hero;
