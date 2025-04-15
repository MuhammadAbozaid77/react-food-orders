import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "../../../assets/advert/advert1.png";
import image3 from "../../../assets/advert/advert3.jpg";
import image4 from "../../../assets/advert/advert4.jpg";

const images = [image1, image3, image4];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div id="home-slider" className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden rounded-lg 2xl:h-[600px]  md:h-[400px] h-[300px]">
        <img
          src={images[currentIndex]}
          alt={`Advert ${currentIndex + 1}`}
          className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out 2xl:h-[600px]  md:h-[400px] h-[300px]"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/50 focus:ring-4 focus:ring-white">
          <FaChevronLeft size={20} color="white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/50 focus:ring-4 focus:ring-white">
          <FaChevronRight size={20} color="white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
