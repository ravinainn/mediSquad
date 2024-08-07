import React from 'react';
import doc from '../../../public/img/hero.png';
import Nav from './nav';
const Hero = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Nav />
      <main className="container mx-auto mr-0 pl-10 py-16 flex flex-col md:flex-row h-screen items-center">
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
            src = {doc}
            alt="Doctor"
            className="md:h-auto md:max-w-lg md:ml-auto ml-0  z-10 relative"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-300 to-green-300 opacity-50 rounded-lg"></div> */}
          {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400 rounded-full opacity-20"></div> */}
        </div>
      </main>
    </div>
  );
};

export default Hero;