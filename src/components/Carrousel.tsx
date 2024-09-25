// src/components/InfiniteSlider.tsx
import React from "react";
import Marquee from "react-fast-marquee";

// Import all images
import car1 from "../assets/images/carrousel-images/car-1.png";
import car2 from "../assets/images/carrousel-images/car-2.png";
import car3 from "../assets/images/carrousel-images/car-3.png";
import car4 from "../assets/images/carrousel-images/car-4.png";
import car5 from "../assets/images/carrousel-images/car-5.png";
import car6 from "../assets/images/carrousel-images/car-6.png";
import car7 from "../assets/images/carrousel-images/car-7.png";
import car8 from "../assets/images/carrousel-images/car-8.png";
import car9 from "../assets/images/carrousel-images/car-9.png";
import car10 from "../assets/images/carrousel-images/car-10.png";
import car11 from "../assets/images/carrousel-images/car-11.png";
import car12 from "../assets/images/carrousel-images/car-12.png";
import car13 from "../assets/images/carrousel-images/car-13.png";
import car14 from "../assets/images/carrousel-images/car-14.png";
import car15 from "../assets/images/carrousel-images/car-15.png";
import car16 from "../assets/images/carrousel-images/car-16.png";
import car17 from "../assets/images/carrousel-images/car-17.png";
import car18 from "../assets/images/carrousel-images/car-18.png";
import car19 from "../assets/images/carrousel-images/car-19.png";
import car20 from "../assets/images/carrousel-images/car-20.png";

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
