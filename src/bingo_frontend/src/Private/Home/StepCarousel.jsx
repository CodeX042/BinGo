// src/components/StepCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StepCarousel = () => {
  const images = [
    "/assets/svg/snap.svg",
    "/assets/svg/trash_bin.svg",
    "/assets/svg/pickup.svg",
    "/assets/svg/earn.svg",
  ];

  const settings = {
    dots: true, // Enable dots navigation if you want them
    infinite: true, // Enables looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Delay between slides
    pauseOnHover: false, // Continues autoplay when hovered
  };

  return (
    <Slider {...settings} className="w-full h-auto">
      {images.map((src, index) => (
        <div key={index} className="w-full h-auto">
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default StepCarousel;
