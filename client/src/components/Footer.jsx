import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Name and Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MediSquad</h1>
          <p className="text-sm">
            MediSquad is committed to providing top-notch healthcare facilities, fostering innovation in medical technology, and ensuring the well-being of our community.
          </p>
        </div>

        {/* Company Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-blue-500">Facilities</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Join Our Team</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Feedback</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
            <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              <span>(011) 777-1234</span>
            </li>
            <li className="flex items-center">
            <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              <span>A-4201 Shaitan gali khatra mehel, New Delhi-110069, India</span>
            </li>
            <li className="flex items-center">
            <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              <span>info@medisquad.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Social Media Links */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="e hover:text-gray-400">
            <span className="sr-only">YouTube</span>
            <svg className="w-6 h-6" fill="red" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a2.82 2.82 0 00-1.987-1.998C19.556 3.61 12 3.61 12 3.61s-7.555 0-9.511.578a2.82 2.82 0 00-1.987 1.998C.444 8.17.444 12 .444 12s0 3.83.058 5.814a2.82 2.82 0 001.987 1.998c1.956.578 9.511.578 9.511.578s7.555 0 9.511-.578a2.82 2.82 0 001.987-1.998C23.556 15.83 23.556 12 23.556 12s0-3.83-.058-5.814zM9.751 15.024v-6.048L16.248 12l-6.497 3.024z"/>
            </svg>
          </a>
          <a href="#" className=" hover:text-gray-400">
            <span className="sr-only">Map</span>
            <svg className="w-6 h-6" fill="black" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 15.929a1 1 0 01-1.732 0l-1.255-2.168a4.992 4.992 0 01-2.563-4.215c0-2.762 2.238-5 5-5s5 2.238 5 5a4.992 4.992 0 01-2.563 4.215l-1.255 2.168zM12 14a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
          </a>
          <a href="#" className=" hover:text-gray-400">
            <span className="sr-only">WhatsApp</span>
            <svg className="w-6 h-6" fill="green" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.657.419 3.217 1.143 4.603L2 22l5.402-1.124A9.935 9.935 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.807 14.646c-.202.555-1.1 1.023-1.57 1.086-.44.057-.95.08-1.526-.168-.81-.342-2.34-1.602-3.82-3.266-1.395-1.542-1.735-2.732-1.993-3.2-.134-.252-.226-.537-.226-.87 0-.227.038-.444.095-.644.085-.297.632-1.523 1.73-1.947.365-.156.648-.232.887-.232.22 0 .428.036.619.082.195.047.6-.159.934.602.325.734 1.105 2.018 1.174 2.162.068.145.112.31.026.492-.056.121-.087.19-.176.304-.085.112-.193.248-.273.337-.11.12-.224.246-.1.468.738 1.304 1.614 2.394 2.904 3.198.234.147.364.14.49.048.103-.071.228-.232.358-.348.11-.1.25-.11.398-.073.148.036.953.448 1.117.89.155.423.155.786.107.92z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 mt-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} MediSquad. All rights reserved. | This website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
