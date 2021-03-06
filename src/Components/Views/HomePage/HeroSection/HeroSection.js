import React from "react";
import "./HeroSection.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="overlay">
        <div className="hero-content">
          <h1>THUISZORG IN GENK EN OMSTREKEN</h1>
          <h3>Voor optimale zorgverlening</h3>

          <div className="btns">
            <AnchorLink href="#contact">
              <button className="contact-btn">
                <span>Neem Contact Op</span>{" "}
              </button>
            </AnchorLink>
            <div style={{ marginTop: "19px" }}>
              <a href="https://www.facebook.com/Thuisverpleging-Wendy-Daan-411645339393124/?ref=page_internal">
                <img
                  src={require("../../../../static/facebook.png")}
                  alt="facebook-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
