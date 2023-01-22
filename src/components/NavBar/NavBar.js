import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="sticky-nav">
      <div className="navbar-background">
        <div className="navbar-section-start">
          <img
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
            loading="lazy"
            width="36"
            alt="Kula logo"
          ></img>
          <span>Product</span>
          <span>Story</span>
          <span>Resources</span>
        </div>
        <div className="navbar-section-end">
          <button className="demo-button ">Book a demo</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
