import React from "react";

const Scoreboard = ({ playerScore }) => {
  return (
    <div className="score border-2 border-headerOutline flex items-center py-2 px-5 rounded-lg">
      <div className="texts w-1/2">
        <h3 className="capitalize">rock</h3>
        <h3 className=" capitalize">paper</h3>
        <h3 className=" capitalize">scissors</h3>
      </div>
      <div className="score-wrapper w-1/2">
        <div className="max-w-[100px] bg-white ml-auto rounded-lg py-1">
          <p
            className="text-xs text-center uppercase text-scoreText m-0 p-0"
            style={{ letterSpacing: "1.5px" }}
          >
            score
          </p>

          <p className="score-text text-dark text-center font-bold m-0 p-0">
            {playerScore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
