import React, { useState } from "react";
import StyledButton from "../StyledButton";
import "../../styles/Dashboard.css";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import WorkPage from "./WorkPage";
import profileImage from "../../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface DashboardProps {
  onLogout: () => void;
  onCheckIn: () => void;
}

function Dashboard({ onLogout, onCheckIn }: DashboardProps) {
  const [view, setView] = useState<"dashboard" | "about" | "projects" | "work">("dashboard");

  const handleGoBack = () => setView("dashboard");

  return (
    <div className="dashboard">
      {/* Render Navbar only in the Dashboard view */}
      {view === "dashboard" && (
        <div className="navbar">
          <button onClick={() => setView("about")} color="#eba098">
            About
          </button>
          <button
            onClick={() => setView("projects")}
            color="#eba098"
          >
            Projects
          </button>
          <button
            onClick={() => setView("work")}
            color="#eba098"
          >
            Work Experience
          </button>
        </div>
      )}

      {/* Conditional Rendering of Pages */}
      {view === "dashboard" && (
        <div className="entire">
          <div className="left-side">
            <img
              className="profile-image"
              src={profileImage}
              alt="Profile"
            />
          </div>
          <div className="text">
            <header className="dashboard-header">
              <h1 className="dashboard-header-title">Hi, I'm Jonie Nishimura</h1>
            </header>
            <h3 className="dashboard-subtitle" id="about">
              I'm currently a student at Brown University studying Computer Science.
              Last summer, I worked as a Software Engineering Intern at Rakuten.
              <br />
              <br />
              I was born and raised in Tokyo, Japan and have family in Los Angeles, CA.
              I gained an interest in coding and game development in middle school after
              spending time playing video games.
            </h3>

            <div className="social-icons">
              <a href="https://github.com/jonie" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/jonie" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:jonie@example.com" className="social-icon">
                <FaEnvelope size={30} />
              </a>
            </div>

            <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
              <StyledButton onClick={() => setView("about")} color="#eba098">
                About
              </StyledButton>
              <StyledButton onClick={() => setView("projects")} color="#eba098">
                Projects
              </StyledButton>
              <StyledButton onClick={() => setView("work")} color="#eba098">
                Work Experience
              </StyledButton>
            </div>
          </div>
        </div>
      )}

      {view === "about" && (
        <AboutPage
          onBack={handleGoBack}
          onProjects={() => setView("projects")}
          onWorkExperience={() => setView("work")}
        />
      )}


      {view === "projects" && (
        <ProjectsPage
          onBack={handleGoBack}
          onWorkExperience={() => setView("work")}
          onAbout={() => setView("about")}
        />
      )}


      {view === "work" && (
        <WorkPage
          onBack={handleGoBack}
          onAbout={() => setView("about")}
          onProjects={() => setView("projects")}
        />
      )}
    </div>
  );
}

export default Dashboard;
