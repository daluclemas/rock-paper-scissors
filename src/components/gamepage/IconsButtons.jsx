import React from "react";

const IconsButtons = ({
  icons,
  alt,
  gradient = "rockGradient",
  getplayersChoice,
}) => {
  return (
    <div
      className={`icons-wrapper w-[100px] h-[100px] md:w-[130px] md:h-[130px] overflow-hidden rounded-[50%] ${gradient} `}
    >
      <button
        className="btn icon-rock w-full h-full bg-white"
        value={alt}
        onClick={getplayersChoice}
      >
        <img
          src={icons}
          alt={alt}
          className="mx-auto w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
        />
      </button>
    </div>
  );
};

export default IconsButtons;
