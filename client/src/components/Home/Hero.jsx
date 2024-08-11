<<<<<<< HEAD
import React, { useState } from 'react';
import doc from "../../../public/img/hero.png";
import Nav from "./nav";
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
// import { Link } from "react-router-dom";
=======
import React from "react";

import doc from "../../assets/img/hero.png";
import Nav from "./nav";

import { Link, useNavigate } from "react-router-dom";

>>>>>>> d1ee0331a3d6f08d7154f2436332193e5c311257
const Hero = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const toggleLoginModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(!showLoginModal);
  };
  const toggleRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(!showRegisterModal);
  };

  const handleNavigateToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <div className="bg-white w-screen h-screen overflow-hidden">
      <Nav />
      <main className="w-screen  py-32 flex flex-col md:flex-row   items-center">
        <div className="md:w-1/2 pl-20 mb-10 md:mb-0">
          <h2 className="text-teal-500 font-semibold mb-4">Welcome</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Empowering Health with Expert Care and Compassion
          </h1>
          <p className="text-gray-600 mb-8">
            We are your partners in your optimal health!
          </p>
          <div className="space-x-4">
            
              <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600" onClick={toggleLoginModal}>
                Consult Now
              </button>
            
            <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-full hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src={doc}
            alt="Doctor"
            className="md:h-auto md:max-w-lg md:ml-auto ml-0  z-10 relative"
          />
          
        </div>
      </main>
      {showLoginModal && <LoginModal onClose={toggleLoginModal} />}
      
    </div>
  );
};

export default Hero;
