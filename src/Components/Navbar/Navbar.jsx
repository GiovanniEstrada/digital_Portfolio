import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
    const btn = document.querySelector(".options-btn");
    btn.classList.toggle("active");
  };

  return (
    <div className="navbar-container">
      <h1 className="title">Portafolio</h1>
      <div className="options">
        <p className="option" id="about-op">
          <Link to="/">Home</Link>
        </p>
        <p className="option" id="skill-op">
          <Link to="/skills">Skills</Link>
        </p>
        <p className="option" id="project-op">
          <Link to="/projects">Projects</Link>
        </p>
        <p className="option" id="about-op">
          <Link to="/about">About Me</Link>
        </p>
        <p className="option" id="contact-op">
          <Link to="/contact">More</Link>
        </p>
      </div>
      <button onClick={toggle} className="options-btn">
        <div className="option-btn"></div>
        <div className="option-btn"></div>
        <div className="option-btn"></div>
      </button>
      <Modal active={menu} />
    </div>
  );
}
