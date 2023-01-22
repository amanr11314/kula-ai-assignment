import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <button className="nav-item-button">Product </button>
          <button className="nav-item-button">Our Story</button>
          <button className="nav-item-button">Resources</button>
        </div>
        <div className="navbar-section-end">
          <button className="demo-button">Book a demo</button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-section-end-dropdown-button"
          >
            {isMenuOpen ? (
              <img
                src="https://img.icons8.com/ios/32/null/delete-sign--v1.png"
                alt="close-menu"
              />
            ) : (
              <img
                src="https://img.icons8.com/ios/36/null/menu-rounded.png"
                alt="open-menu"
              />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="mobile-nav-menu-wrapper">
          <div className="mobile-nav-menu">
            <button className="mobile-nav-menu-item">Product</button>
            <button className="mobile-nav-menu-item">Our Story</button>
            <button className="mobile-nav-menu-item">Resources</button>
          </div>
          <button className="demo-button">Book a demo</button>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
