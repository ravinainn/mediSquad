import React, { useState } from 'react'

import LoginModal from '../Home/LoginModal';

const Nav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  return (
    <div>
      <header className="container mx-auto px-6 pl-10 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MediSquad</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-teal-500 hover:text-teal-600" onClick={toggleLoginModal}>Login</button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
            Register →
          </button>
        </div>
      </header>

      {showLoginModal && <LoginModal onClose={toggleLoginModal} />}
    </div>
  )
}

export default Nav
