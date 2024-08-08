import React, { useState, useEffect } from "react";
import '../../custom.css'
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import doc from '../../../public/img/hero.png';
// import {bg} from '../../../public/img/summerBg.png'
import { Link } from 'react-scroll';

const Main = () => {


    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide === 3 ? 1 : prevSlide + 1));
        }, 5000);

    }, []);

    return (
        <div className="h-full">
            <div className="flex lg:mt-10">
                <div className=" md:w-6/12 bg-whitep-8 xl:p-20 md:p-12 justify-center items-center ">
                    {currentSlide === 1 && <Slide1 />}
                    {currentSlide === 2 && <Slide2 />}
                    {currentSlide === 3 && <Slide3 />}
                    <Link
                        to="appointmentForm"
                        smooth={true}
                        duration={500}
                        className="custom-button bg-teal-400 hover:bg-teal-600 text-lg tracking-wide mr-6 cursor-pointer"
                    >
                        Schedule Call
                    </Link>
                    <Link
                        to="appointmentForm"
                        smooth={true}
                        duration={500}
                        className="custom-button bg-teal-400 hover:bg-teal-600 text-lg tracking-wide mr-6 cursor-pointer"
                    >
                        Emergency
                    </Link>
                    {/* <button className='custom-button bg-teal-400 hover:bg-teal-600 text-lg tracking-wide'>
                        Emergency
                    </button> */}
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

export default Main
