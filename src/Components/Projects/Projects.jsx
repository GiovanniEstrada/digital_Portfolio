import React from "react";
import "./projects.css";

// Images
import proj1 from "../../assets/netflix-1.PNG";
import proj2 from "../../assets/challenge-1.PNG";
import proj3 from "../../assets/challenge-2.PNG";
import proj4 from "../../assets/challenge-3.PNG";
import proj5 from "../../assets/challenge-4.PNG";
import proj6 from "../../assets/challenge-6.PNG";
import proj7 from "../../assets/challenge-5.PNG";
import proj8 from "../../assets/challenge-7.png";

export default function Projects({
  title,
  url,
  description,
  git,
  frameworks,
  project,
}) {
  return (
    <div className="project-container">
      <div className="contain-img">
        <img
          alt="img"
          className="img-project"
          src={
            project === "netflix"
              ? proj1
              : project === "challenge1"
              ? proj2
              : project === "challenge2"
              ? proj3
              : project === "challenge3"
              ? proj4
              : project === "challenge4"
              ? proj5
              : project === "challenge5"
              ? proj6
              : project === "challenge6"
              ? proj7
              : project === "challenge7"
              ? proj8
              : ""
          }
        ></img>
      </div>
      <div className="info">
        <h1 className="project-title">{title}</h1>
        <div className="technologies">
          {frameworks.map((data) => (
            <p key={data} className="framework">
              {data}
            </p>
          ))}
        </div>
        <div className="description">{description}</div>
        <div className="redirect">
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className="btn-red git"
          >
            View Code
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn-red url"
          >
            View Page
          </a>
        </div>
      </div>
    </div>
  );
}
