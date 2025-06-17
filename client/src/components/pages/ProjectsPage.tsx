import React, { useState, useEffect } from "react";
import "../../styles/ProjectsPage.css";
import { useUser } from "@clerk/clerk-react";
import wellnestImage from "../../assets/wellnest.png";
import djMaxImage from "../../assets/djmax.png";

interface ProjectsPageProps {
  onBack: () => void;
  onWorkExperience: () => void;
  onAbout: () => void;
}

function ProjectsPage({ onBack, onWorkExperience, onAbout}: ProjectsPageProps) {
  return (
    <div className="manage-users-page">
      <div className="navbar">
        <button onClick={onBack} color="#eba098">
          Home
        </button>
        <button onClick={onAbout} color="#eba098">About</button>
        <button onClick={onWorkExperience} color="#eba098">Work Experience</button>
      </div>

      <div className="manage-users-header">
        <h1 className="manage-users-header-title">Projects</h1>
      </div>

      <div className="page-content">
        <div className="manage-users-entire">
          <div className="left">
            <h3>WellNest</h3>
            <p>
              WellNest is a user-friendly application designed to help the elderly easily update and share their location and safety status with loved ones. The app prioritizes simplicity, featuring a streamlined dashboard with three main functionalities: Check-In, Manage Users, and Check Location.
            </p>
          </div>

          <div className="right">
            <img
              className="project-1-image"
              src={wellnestImage}
              alt="Project1"
            />
          </div>
        </div>
        <div className="manage-users-entire">
          <div className="left">
            <h3>DJMax AI Player</h3>
            <p>
              DJMaxBot is a neural network-based AI system designed to play the rhythm game DJMax by predicting the correct keypresses in real time. The model architecture contains a ResNet-18 CNN for visual feature extraction, a GRU-based sequence model for temporal processing, and a real-time inference engine that presses keys using predicted probabilities. DJMaxBot performs at over 94% at all song difficulties and on both songs that it has and hasn't been trained on.
            </p>
          </div>

          <div className="right">
            <img
              className="project-1-image"
              src={djMaxImage}
              alt="Project1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
