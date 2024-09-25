// src/components/InfiniteSlider.tsx
import React from "react";
import Marquee from "react-fast-marquee";

// Import all images
import car1 from "../assets/images/carrousel-images/car-1.webp";
import car2 from "../assets/images/carrousel-images/car-2.webp";
import car3 from "../assets/images/carrousel-images/car-3.webp";
import car4 from "../assets/images/carrousel-images/car-4.webp";
import car5 from "../assets/images/carrousel-images/car-5.webp";
import car6 from "../assets/images/carrousel-images/car-6.webp";
import car7 from "../assets/images/carrousel-images/car-7.webp";
import car8 from "../assets/images/carrousel-images/car-8.webp";
import car9 from "../assets/images/carrousel-images/car-9.webp";
import car10 from "../assets/images/carrousel-images/car-10.webp";
import car11 from "../assets/images/carrousel-images/car-11.webp";
import car12 from "../assets/images/carrousel-images/car-12.webp";
import car13 from "../assets/images/carrousel-images/car-13.webp";
import car14 from "../assets/images/carrousel-images/car-14.webp";
import car15 from "../assets/images/carrousel-images/car-15.webp";
import car16 from "../assets/images/carrousel-images/car-16.webp";
import car17 from "../assets/images/carrousel-images/car-17.webp";
import car18 from "../assets/images/carrousel-images/car-18.webp";
import car19 from "../assets/images/carrousel-images/car-19.webp";
import car20 from "../assets/images/carrousel-images/car-20.webp";

// Object containing all images
const images = [
  car1, car2, car3, car4, car5, car6, car7, car8, car9, car10,
  car11, car12, car13, car14, car15, car16, car17, car18, car19, car20,
];

const InfiniteSlider: React.FC = () => {
  return (
    <div className="overflow-hidden max-w-md">
      <Marquee gradient={false} speed={20}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[100px] h-[150px] mx-1">
            <img src={image} alt={`carousel-${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[100px] h-[150px] mx-1">
            <img src={image} alt={`carousel-${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default InfiniteSlider;
