import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h3>New Arrival Coming</h3>
        <div>
          <p>Live the fashion life.</p>
          <p>
          Let your fashion speak for itself.</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img
            src={arrow_icon}
            alt="arrow-icon"
          />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
