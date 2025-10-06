import React, { useState, useEffect } from "react";
import "../../styles/ProjectsPage.css";
import { useUser } from "@clerk/clerk-react";
import wellnestImage from "../../assets/wellnest.png";
import djMaxImage from "../../assets/djmax.png";
import valodash from "../../assets/valodash.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
            <h3>Valodash
              <a href="https://github.com/jonie-n/valodash" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={30} />
              </a>
            </h3>
            <div className="meta-card">
              <div>
                <label>Tech Stack:</label>
                <p>React (Vite), TypeScript, Tailwind CSS, Node.js / Express, File-based JSON data store, Firebase Authentication, Custom pixel-art assets</p>
              </div>
              <div className="social-icons">
            </div>
            </div>
            <p>
            Developed Valodash, a full-stack web application for tracking Valorant match history per user, featuring a React + TypeScript frontend and a Node.js + Express backend with RESTful endpoints serving JSON-based match data, designed for seamless migration to production databases. Engineered a custom backend data generator to simulate the official Valorant API, creating realistic match histories with 27 agents, 12 maps, and detailed stats such as KDA, win/loss, and headshot percentage within realistic ranges. Integrated Firebase Authentication to automatically provision personalized mock data for new users, while also designing original pixel art assets to deliver a unique and engaging interface.
            </p>
          </div>

          <div className="right">
            <img
              className="project-1-image"
              src={valodash}
              alt="Project1"
            />
          </div>
        </div>
        <div className="manage-users-entire">
          <div className="left">
            <h3>DJMax AI Player
              <a href="https://github.com/jonie-n/DJ-Max-AI-Player" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={30} />
              </a>
            </h3>
            <div className="meta-card">
              <div>
                <label>Tech Stack:</label>
                <p>Python, PyTorch, ResNet-18 CNN, GRU</p>
              </div>
            </div>
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
        <div className="manage-users-entire">
          <div className="left">
            <h3>WellNest
              <a href="https://github.com/jonie-n/wellnest-public" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={30} />
              </a>
            </h3>
            <div className="meta-card">
              <div>
                <label>Tech Stack:</label>
                <p>React, TailwindCSS, Mapbox, Firebase, Node.js, Clerk, Resend, Mapbox API</p>
              </div>
            </div>
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
            <h3>Motel Management
              <a href="https://github.com/jonie-n/motel-manager-publicvr" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={30} />
              </a>
            </h3>
            <div className="meta-card">
              <div>
                <label>Tech Stack:</label>
                <p>Godot, GDScript</p>
              </div>
            </div>
            <p>
            Motel Manager is a 2D story-based management game developed in Godot where players run a motel that serves as a safe haven for animals threatened by poaching. The game blends interactive storytelling and management mechanics to raise awareness about wildlife conservation, while creating an engaging player experience.
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
      </div>
    </div>
  );
}

export default ProjectsPage;
