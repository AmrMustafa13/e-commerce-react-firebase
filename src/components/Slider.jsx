import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const data = [
  "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide(data.length - 1);
    }
  };

  return (
    <div className="h-[100vh] relative overflow-hidden">
      <div
        className="flex w-[300vw] h-full transition-all duration-500 ease-in-out
        "
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        <img src={data[0]} alt="" className="w-[100vw] h-full object-cover" />
        <img src={data[1]} alt="" className="w-[100vw] h-full object-cover" />
        <img src={data[2]} alt="" className="w-[100vw] h-full object-cover" />
      </div>
      <div
        className="absolute 
        top-3/4
        left-1/2
        transform
        -translate-x-1/2
        flex
        gap-4
      "
      >
        <button
          className="
            bg-white
            w-10
            h-10
            rounded-full
            shadow-md
            hover:shadow-lg
            transition
            duration-300
            ease-in-out
            opacity-80
            flex
            items-center
            justify-center
        "
          onClick={handlePrev}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="
          bg-white
          w-10
          h-10
          rounded-full
          shadow-md
          hover:shadow-lg
          transition
          duration-300
          ease-in-out
          opacity-80
          flex
          items-center
          justify-center
        "
          onClick={handleNext}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
