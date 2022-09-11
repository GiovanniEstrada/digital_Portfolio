import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./modal.css";

export default function Modal({ active }) {
  const menu = document.getElementById("menu");
  return ReactDOM.createPortal(
    <div className={active ? "screen active" : "screen"}>
      <div className="options-m">
        <p className="option-m" id="about-op">
          <Link to="/">Home</Link>
        </p>
        <p className="option-m" id="skill-op">
          <Link to="/skills">Skills</Link>
        </p>
        <p className="option-m" id="project-op">
          <Link to="/projects">Projects</Link>
        </p>
        <p className="option-m" id="about-op">
          <Link to="/about">About Me</Link>
        </p>
        <p className="option-m" id="contact-op">
          <Link to="/contact">More</Link>
        </p>
      </div>
    </div>,
    menu
  );
}
