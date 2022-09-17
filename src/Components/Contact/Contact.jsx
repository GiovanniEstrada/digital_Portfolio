import React from "react";
import "./Contact.css";

import { SiGmail, SiGithub, SiFrontendmentor } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="contacts-container">
        <div className="contact">
          <a
            href="mailto:cgiovanniestrada@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="ref"
          >
            <SiGmail className="logo" />
            Gmail
          </a>
        </div>
        <div className="contact">
          <a
            href="https://github.com/GiovanniEstrada"
            target="_blank"
            rel="noreferrer"
            className="ref"
          >
            <SiGithub className="logo" />
            Github
          </a>
        </div>
        <div className="contact">
          <a
            href="https://www.frontendmentor.io/profile/GiovanniEstrada"
            className="ref"
            target="_blank"
            rel="noreferrer"
          >
            <SiFrontendmentor className="logo" />
            Frontend Mentor
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
