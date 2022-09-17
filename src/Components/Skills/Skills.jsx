import React from "react";
import "./Skills.css";

import { FaReact, FaAngular, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiCss3, SiTypescript, SiVuedotjs } from "react-icons/si";

export default function Skills({ tech }) {
  return (
    <div className="skills-container">
      <div className="container-center">
        <div className="skill-container">
          <div className="logo">
            <FaReact />
          </div>
          <div className="section">
            <h1 className="name-tech">React</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point "></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------*/}
        <div className="skill-container">
          <div className="logo">
            <FaAngular />
          </div>
          <div className="section">
            <h1 className="name-tech">Angular</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point "></div>
              <div className="point"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------*/}
        <div className="skill-container">
          <div className="logo">
            <SiVuedotjs />
          </div>
          <div className="section">
            <h1 className="name-tech">Vue.js</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point "></div>
              <div className="point"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------*/}
        <div className="skill-container">
          <div className="logo">
            <SiJavascript />
          </div>
          <div className="section">
            <h1 className="name-tech">Javascript</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------*/}
        <div className="skill-container">
          <div className="logo">
            <FaHtml5 />
          </div>
          <div className="section">
            <h1 className="name-tech">HTML</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------*/}
        <div className="skill-container">
          <div className="logo">
            <SiCss3 />
          </div>
          <div className="section">
            <h1 className="name-tech">CSS</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------*/}
        <div className="skill-container">
          <div className="logo">
            <SiTypescript />
          </div>
          <div className="section">
            <h1 className="name-tech">Typescript</h1>
            <div className="points">
              <div className="point active"></div>
              <div className="point active"></div>
              <div className="point"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
