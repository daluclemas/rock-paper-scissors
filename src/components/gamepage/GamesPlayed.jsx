import React from "react";
import IconsButtons from "./IconsButtons";

const GamesPlayed = ({
  userData,
  playerGradient,
  computerGradient,
  playerIcon,
  computerIcon,
  displayMessage,
  reset,
}) => {
  return (
    <section className=" py-5 w-90 mx-auto btn-wrapper gamePlayed 2md:mt-[110px]">
      <div className=" flex w-full">
        <div className="w-1/2 flex flex-col-reverse md:flex-col">
          <h5
            className="uppercase text-sm md:text-base text-center"
            style={{ letterSpacing: "2px" }}
          >
            {userData} picked
          </h5>

          <IconsButtons gradient={playerGradient} icons={playerIcon} />
        </div>
        <div className="display-message w-1/2 flex-col justify-center items-center desktop-scores">
          <h1
            className="text-[32px] md:text-[30px] uppercase"
            style={{ letterSpacing: "2px" }}
          >
            {displayMessage}
          </h1>

          <section className="play-again w-[180px] h-[40px] overflow-hidden rounded-md bg-white mt-4 ">
            <button
              className="w-full h-full bg-transparent text-scoreText uppercase text-sm font-bold"
              style={{ letterSpacing: "2px" }}
              onClick={reset}
            >
              play again{" "}
            </button>
          </section>
        </div>
        <div className="w-1/2  flex flex-col-reverse md:flex-col">
          <h5
            className="uppercase text-sm md:text-base text-center"
            style={{ letterSpacing: "2px" }}
          >
            the house picked
          </h5>

          <IconsButtons gradient={computerGradient} icons={computerIcon} />
        </div>
      </div>

      <div className="display-message w-full flex-col justify-center items-center mobile-scores mt-6 mx-auto">
        <h1
          className="text-[32px] md:text-[30px] uppercase"
          style={{ letterSpacing: "2px" }}
        >
          {displayMessage}
        </h1>

        <section className="play-again w-[180px] h-[40px] overflow-hidden rounded-md bg-white mt-4 mb-8">
          <button
            className="w-full h-full bg-transparent text-scoreText uppercase text-sm font-bold"
            style={{ letterSpacing: "2px" }}
            onClick={reset}
          >
            play again{" "}
          </button>
        </section>
      </div>
    </section>
  );
};

export default GamesPlayed;
