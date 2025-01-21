import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
    const slides = [1]; // Array to create three slides

    return (
        <>
            <div className="hero" id="hero">
                <div>
                    <NavBar />
                </div>

                <div
                    className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
                    data-aos="zoom-in"
                >
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        interval={2000}
                        showIndicators={false}
                        
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                id={`hero-slide-${index}`}
                                className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
                            >
                                <div
                                    className="lg:w-1/2 flex flex-col justify-center"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >
                                    <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                        ATORIX IT SOLUTIONS
                                    </h1>
                                    <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                        Atorix IT Solutions is the Best SAP S4
                                        HANA Implementation Partner in India
                                        with its head office in Pune. It has
                                        unrivalled experience in providing
                                        robust, business process solutions for
                                        successful clients.
                                    </div>
                                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                       
                                        <Link
                                            to="/contact"
                                            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                                        >
                                            Get Started
                                            <svg
                                                className="w-4 h-4 ml-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </Link>
                                    
                                    </div>
                                </div>
                                <div
                                    className="flex lg:justify-end w-full lg:w-1/2"
                                    data-aos="fade-up"
                                    data-aos-delay="700"
                                >
                                    <img
                                        alt="card img"
                                        className="rounded-t float-right duration-1000 w-full"
                                        src={heroImg}
                                    />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Hero;
