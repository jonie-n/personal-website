import React from "react";
import "../../styles/Dashboard.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <footer style={{
        marginTop: "auto",
        padding: "10px 0",
        backgroundColor: "#eba098",
        color: "white",
        textAlign: "center",
        fontFamily: "Mali",
        fontSize: "0.9em"
      }}>
        <div style={{ marginBottom: "10px" }}>© 2025 Jonie Nishimura</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://github.com/jonie-n" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jonie-nishimura-8bb255252/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:jonie_nishimura@brown.edu" className="social-icon">
            <FaEnvelope size={24} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;