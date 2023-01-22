import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Double the hire, half the effort</h1>
      <p className="header-subtitle">
        Open conversation and nurture relationships at scale and be the first
        choice when your ideal candidate is ready to explore.
      </p>
      <button className="button-brand-view">View Kula Outreach</button>
    </div>
  );
};

export default Header;
