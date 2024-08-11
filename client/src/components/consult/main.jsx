import React, { useState, useEffect } from "react";
import "../../custom.css";
import Slide1 from "./slide1";
import Slide2 from "./slide2";

import doc from "../../assets/img/hero.png";

import { Link } from "react-scroll";
import EmergencyForm from "./EmergencyForm";

const main = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 1 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="h-full">
      <div className="flex justify-center md:mt-20">
        <div className="md:w-6/12 bg-white p-8 xl:p-20 md:p-12 justify-center items-center">
          {!showForm ? (
            <>
              {currentSlide === 1 && <Slide1 />}
              {currentSlide === 2 && <Slide2 />}
              {/* {currentSlide === 3 && <Slide3 />} */}
              <Link
                to="appointmentForm"
                smooth={true}
                duration={500}
                className="custom-button bg-teal-400 hover:bg-teal-600 text-lg tracking-wide mr-6 cursor-pointer"
              >
                Schedule Call
              </Link>
              <button
                onClick={() => setShowForm(true)}
                className="custom-button bg-teal-400 hover:bg-teal-600 text-lg tracking-wide mr-6 cursor-pointer"
              >
                Emergency
              </button>
            </>
          ) : (
            <EmergencyForm onClose={handleCloseForm} />
          )}
        </div>
        <img
          src={doc}
          alt="Doctor"
          className="lg:h-auto lg:max-w-lg md:ml-auto hidden lg:block"
        />
      </div>
    </div>
  );
};

export default main;
