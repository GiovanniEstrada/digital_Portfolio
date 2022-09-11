import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header className="header-main">
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="presentation">
        <p className="welcome">Welcome, my name is:</p>
        <h1 className="fst-name name">Cristian Giovanni</h1>
        <h1 className="lst-name name">Estrada Ramirez</h1>
        <h2 className="dev">Frontend Developer</h2>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
