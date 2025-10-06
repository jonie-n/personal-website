import React, { useState, useEffect } from "react";
import "../../styles/WorkPage.css";

interface WorkPageProps {
  onBack: () => void;
  onAbout: () => void;
  onProjects: () => void;
}

function WorkPage({ onBack, onAbout, onProjects }: WorkPageProps) {
  return (
    <div className="check-user-locations-page">
      <div className="navbar">
        <button onClick={onBack} color="#eba098">Home</button>
        <button onClick={onAbout} color="#eba098">About</button>
        <button onClick={onProjects} color="#eba098">Projects</button>
      </div>


      <div className="check-user-locations-header">
        <h1 className="check-user-locations-title">Work Experience</h1>
      </div>

      <div className="page-content">
        <div className="left">
          <h3>Rakuten - Software Engineer Intern</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Tokyo, Japan</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>June 2024 - August 2024</p>
            </div>
          </div>
          <p>
          Contributed to the development of Rakuten's e-commerce platform by building modern, user-friendly frontend components using JavaScript, TypeScript, React, and CSS. Worked closely with designers and engineers to implement responsive and accessible UI features. Collaborated with the AI Data Development team to review and test large language model (LLM) outputs, providing critical feedback and ensuring reliable integration into existing systems.
          </p>
        </div>
        <div></div>
        <div className="left">
          <h3>Hoops Academy - Frontend Web Development Intern</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Los Angeles, CA</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>August 2025 - Present</p>
            </div>
          </div>
          <p>
          Improved and maintained the company’s public-facing website on Squarespace, enhancing UI/UX and implementing new features with HTML/CSS and third-party integrations. Collaborated with stakeholders to refine requirements and deliver updates that streamlined functionality and elevated the overall user experience.
          </p>
        </div>
        <div></div>
        <div className="left">
          <h3>One Percent - Data Structures and Algorithms Tutor</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Remote</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>September 2025 - Present</p>
            </div>
          </div>
          <p>
          Tutor a college sophomore in data structures and algorithms, covering coding concepts, problem-solving strategies, and course material at a college level. Provide ongoing support to strengthen understanding, build confidence, and improve academic performance.
          </p>
        </div>
        <div></div>
        <div className="left">
          <h3>Data Structures & Algorithms - Teaching Assistant</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Providence, RI</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>January 2025 - May 2025</p>
            </div>
          </div>
          <p>
          Support students in mastering foundational computer science concepts through one-on-one code reviews, debugging and conceptual guidance, and weekly lab instruction. Lead office hours and collaborative code review sessions to enhance student learning and foster peer discussion. Partner with faculty and fellow TAs to design effective teaching materials, assignments, and review content for a rigorous, theory-driven curriculum.
          </p>
        </div>
        <div></div>
        <div className="left">
          <h3>Brown University - IgniteCS Volunteer Instructor</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Providence, RI</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>2023 - Present</p>
            </div>
          </div>
          <p>
          Teach coding and robotics to local elementary students, designing engaging lessons that inspire interest in STEM. Mentor students in foundational programming concepts and hands-on robotics activities.
          </p>
        </div>
        <div></div>
        <div className="left">
          <h3>Brown-Rhode Island School of Design Game Developers Club - Programmer</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Providence, RI</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>January 2024 - May 2024</p>
            </div>
          </div>
          <p>
          Co-developed a 2D hotel-management game in Godot as part of a collaborative student team. Participated in Unity, Unreal, and Blender workshops to strengthen game development and design skills.
          </p>
        </div>
        <div className="left">
          <h3>Private English Tutor</h3>
          <div className="meta-card">
            <div>
              <label>Location:</label>
              <p>Tokyo, Japan</p>
            </div>
            <div>
              <label>Dates:</label>
              <p>June 2019 - May 2023</p>
            </div>
          </div>
          <p>
          Delivered personalized English instruction tailored to individual student needs across grammar, conversation, and academic writing. Designed custom worksheets and creative homework assignments to promote independent thinking and language fluency. Adapted teaching methods to accommodate a student with a hearing disability, incorporating visual learning techniques and alternative communication strategies to ensure accessibility and engagement.
          </p>
        </div>
      </div>

      {/* <footer className="go-back-footer">
        <div className="go-back-button-container">
          <StyledButton onClick={onBack} color="#eba098">
            Go Back
          </StyledButton>
        </div>
      </footer> */}
    </div>
  );
}

export default WorkPage;
