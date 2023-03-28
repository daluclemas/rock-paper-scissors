import React from "react";

const CarouselContent = ({ bgImage, stepDesktop, stepMobile }) => {
  return (
    <figure className={`m-0 p-0 h-full ${bgImage}`}>
      <img src={stepDesktop} alt="img-name" className="w-full h-full desktop" />
      <img src={stepMobile} alt="img-name" className="w-full h-full mobile" />
    </figure>
  );
};

export default CarouselContent;
