import React from 'react';
import { useNavigate } from "react-router-dom";
const ActivitySection = () => {

  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto md:flex">
      <div className="mb-8">
        <div className="w-16 h-1 bg-red-500 mb-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Activity</h2>
        <p className="text-gray-600 max-w-2xl mb-6">
          Our task is Balancing Immediate Response and In-Depth Consultations in Healthcare Solutions.
        </p>
        <a href="#" onClick={handleAbout} className="text-blue-600 hover:text-blue-800 inline-flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

        <div className="md:flex">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-teal-500 text-white p-3 rounded-lg inline-block mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Consultation</h3>
          <div className="w-14 h-1 bg-red-400 mb-4"></div>
          <p className="text-gray-600">Treatment to cure day to day illness</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-teal-500 text-white p-3 rounded-lg inline-block mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Emergency</h3>
          <div className="w-14 h-1 bg-red-400 mb-4"></div>
          <p className="text-gray-600">Rapid Response for Lifesaving Care</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;