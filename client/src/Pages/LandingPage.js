import React from "react";
import { useNavigate } from "react-router-dom";

import landingPage from "../assets/landingPage.jpg";
import logo from "../assets/landingPage.jpg";

export default function LandingPage(props) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    props.openModalLogin();
  };

  return (
    <div className="w-screen min-h-screen bg-white relative flex items-center justify-center">
      {/* Logo */}
     

      {/* Background Image */}
      <img src={landingPage} alt="Landing" className="rounded-xl" />

      {/* Login Button */}
      <button
        onClick={handleLoginClick}
        className="absolute top-5 right-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
