import React from "react";
import CV from "../../assets/cv.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
    </div>
  );
};

export default CTA;
