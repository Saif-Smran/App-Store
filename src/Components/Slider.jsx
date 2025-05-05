import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [current]); // Restart interval when current changes

    return (
        <div className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out w-full ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img src={slide?.thumbnail} alt={slide?.name} className="w-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-blue-700" : "bg-white"
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Controls */}
            <button
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="btn btn-circle bg-white/30 hover:bg-white/50 border-none">
                    <HiChevronLeft className="w-6 h-6 text-red-700" />
                </span>
            </button>

            <button
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="btn btn-circle bg-white/30 hover:bg-white/50 border-none">
                    <HiChevronRight className="w-6 h-6 text-red-700" />
                </span>
            </button>
        </div>
    );
};

export default Slider;
