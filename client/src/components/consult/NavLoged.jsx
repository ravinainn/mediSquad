import React from 'react'
import user from '../../../public/img/user.png'
const NavLoged = () => {
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
          <img src={user} className='h-12 w-12 mr-16' alt="" />
        </div>
      </header>
    </div>
  )
}

export default NavLoged
