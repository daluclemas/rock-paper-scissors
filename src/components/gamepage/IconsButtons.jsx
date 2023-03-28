import React from "react";

const IconsButtons = ({ icons, alt, gradient = "rockGradient" }) => {
  return (
    <div
      className={`icons-wrapper w-[100px] h-[100px] overflow-hidden rounded-[50%] ${gradient} `}
    >
      <button className="btn icon-rock w-full h-full bg-white" value={alt}>
        <img src={icons} alt={alt} className="mx-auto w-[35px] h-[35px]" />
      </button>
    </div>
  );
};

export default IconsButtons;
