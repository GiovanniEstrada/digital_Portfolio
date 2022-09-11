import React from "react";
import "./Contact.css";

import { SiGmail, SiGithub, SiFrontendmentor } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="contacts-container">
        <a
          href="mailto:cgiovanniestrada@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-container"
        >
          <SiGmail className="logo" />
        </a>
        <a
          href="https://github.com/GiovanniEstrada"
          target="_blank"
          rel="noreferrer"
          className="contact-container"
        >
          <SiGithub className="logo" />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/GiovanniEstrada"
          target="_blank"
          rel="noreferrer"
          className="contact-container"
        >
          <SiFrontendmentor className="logo" />
        </a>
      </div>
    </>
  );
}

export default Contact;
