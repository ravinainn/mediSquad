import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MediSquad</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-teal-500 hover:text-teal-600">Login</button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
            Register →
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-teal-500 font-semibold mb-4">Welcome</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Empowering Health with Expert Care and Compassion
          </h1>
          <p className="text-gray-600 mb-8">
            We are your partners in your optimal health!
          </p>
          <div className="space-x-4">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
              Join Us
            </button>
            <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-full hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="../../../public/img/heroDoctor.svg"
            alt="Doctor"
            className="md:h-auto md:max-w-lg md:ml-auto  z-10 relative"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-300 to-green-300 opacity-50 rounded-lg"></div> */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400 rounded-full opacity-20"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;