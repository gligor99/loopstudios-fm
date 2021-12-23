import React from "react";
import Navbar from "../Navbar/Navbar";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="container-content">
        <h1>
          Impresivve <br /> experiences <br />
          that deliver
        </h1>
      </div>
    </div>
  );
};

export default Hero;
