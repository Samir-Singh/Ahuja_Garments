import React from "react";

export default function HeroText() {
  return (
    <div className="hero-section-homepage">
      <div className="hero-section-text">
        <div className="logo_div">
          <img
            className="mukhi_logo"
            src={require("../../assets/images/Logo.png")}
            alt="logo"
          />
        </div>
        <a href="/shop" className="shop-now-button">
          Shop now
        </a>
      </div>
    </div>
  );
}
