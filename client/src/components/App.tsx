import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

initializeApp(firebaseConfig);

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard"); // Start directly on the Dashboard

  const handleLogout = () => setCurrentPage("dashboard");
  const goToCheckInPage = () => setCurrentPage("checkin");

  return (
    <Dashboard
      onLogout={handleLogout}
      onCheckIn={goToCheckInPage}
    />
  );
}

export default App;
