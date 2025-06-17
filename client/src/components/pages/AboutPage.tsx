import React, { useState, useEffect } from "react";
import StyledButton from "../StyledButton";
import "../../styles/AboutPage.css";
import brownImage from "../../assets/brown.png";

interface AboutPageProps {
  onBack: () => void;
  onProjects: () => void;
  onWorkExperience: () => void;
}

function AboutPage({ onBack, onProjects, onWorkExperience }: AboutPageProps) {
  const [view, setView] = useState<"dashboard" | "projects" | "work">(
    "dashboard"
  );

  return (
    <div className="about-page">
      <div className="navbar">
        <button onClick={onBack} color="#eba098">
          Home
        </button>
        <button onClick={onProjects} color="#eba098">
          Projects
        </button>
        <button onClick={onWorkExperience} color="#eba098">
          Work Experience
        </button>
      </div>

      <div className="about-entire">
        <div className="about-left-side">
          <img
              className="brown-image"
              src={brownImage}  // Using the imported image
              alt="Brown"
            />
        </div>

        <div className="about-text">
          <div className="about-header">
            <h1 className="about-header-title">About Me</h1>
          </div>
            <p>I'm currently a student at Brown University studying Computer Science.
              Last summer, I worked as a Software Engineering Intern at Rakuten.
              <br/>
              I was born and raised in Tokyo, Japan and have family in Los Angeles, CA.
              I gained an interest in coding and game development in middle school after
              spending time playing video games.
            </p>
          <br/>
          <h3>Education</h3>
          <p>Sc.B. Computer Science from Brown University (2023-2027)</p>
          <br/>
          <h3>Spoken Languages</h3>
          <p>English: Native Speaker <br/> Japanese: Fluent</p>
          <br/>
          <h3>Contact Me</h3>
          <p>
            Location: Providence, RI
            <br />
            Email: jonie_nishimura@brown.edu
          </p>

          <div className="about-buttons-section">
            <div className="go-back-button-container">
              <StyledButton onClick={onBack} color="#eba098">
                Go Back
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
