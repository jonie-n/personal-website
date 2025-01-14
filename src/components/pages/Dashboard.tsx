import React, { useState } from "react";
import StyledButton from "../StyledButton";
import "../../styles/Dashboard.css";
import ManageUsersPage from "./ManageUsersPage"; // Import ManageUsersPage
import CheckUserLocationsPage from "./CheckUserLocationsPage"; // Import CheckUserLocationsPage
import profileImage from "../../assets/profile.png";  // Adjust the relative path if necessary
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import the icons


interface DashboardProps {
  onLogout: () => void;
  onCheckIn: () => void;
}

function Dashboard({ onLogout, onCheckIn }: DashboardProps) {
  const [view, setView] = useState<"dashboard" | "manageUsers" | "checkLocations">(
    "dashboard"
  );

  const handleGoBack = () => setView("dashboard");

  return (
    <div className="dashboard">
      {view === "dashboard" && (
        <div className="entire">
          {/* Header and Subtext Section */}
          <div className="left-side">
            {/* Circular Image */}
            <img
              className="profile-image"
              src={profileImage}  // Using the imported image
              alt="Profile"
            />
          </div>
          <div className="text">
            <header className="dashboard-header">
              <h1 className="dashboard-header-title">Hi, I'm Jonie Nishimura</h1>
            </header>
            <h3 className="dashboard-subtitle">
              I'm currently a student at Brown University studying Computer Science.
              Last summer, I worked as a Software Engineering Intern at Rakuten.
              <br />
              <br />
              I was born and raised in Tokyo, Japan and have family in Los Angeles, CA.
              I gained an interest in coding and game development in middle school after
              spending time playing video games.
            </h3>

            {/* Icons Section */}
            <div className="social-icons">
              <a href="https://github.com/jonie-n" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/jonie-nishimura" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="social-icon" />
              </a>
              <a href="mailto:jonie.nishimura@example.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} className="social-icon" />
              </a>
            </div>

            <div className="buttons-section">
              <StyledButton onClick={onCheckIn} color="#eba098">
                About
              </StyledButton>
              <StyledButton
                onClick={() => setView("manageUsers")} // Navigate to ManageUsersPage
                color="#eba098"
              >
                Projects
              </StyledButton>
              <StyledButton
                onClick={() => setView("checkLocations")} // Navigate to CheckUserLocationsPage
                color="#eba098"
              >
                Work Experience & Skills
              </StyledButton>
            </div>
          </div>
        </div>
      )}

      {view === "manageUsers" && <ManageUsersPage onBack={handleGoBack} />}
      {view === "checkLocations" && <CheckUserLocationsPage onBack={handleGoBack} />}
    </div>
  );
}

export default Dashboard;
