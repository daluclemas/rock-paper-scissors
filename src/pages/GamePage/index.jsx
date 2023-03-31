import React, { useState, useEffect, useRef } from "react";
import * as components from "../../components";
import { buttonDetails } from "../../paths";
import { createPortal } from "react-dom";
import * as icons from "../../assets";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [modal, setModal] = useState(false);
  const [gamesPlayed, setGamesPlayed] = useState(false);

  const [playerGradient, setPlayerGradient] = useState("");
  const [computerGradient, setComputerGradient] = useState("");
  const [playerChoiceimg, setplayerchoiceImg] = useState("");
  const [computerChoiceImg, setComputerchoiceImg] = useState("");
  const [displayScore, setDisplayScore] = useState(0);

  const [displayMessage, setDisplayMessage] = useState("");

  const navigate = useNavigate();

  let userData = localStorage.getItem("userData");
  let scoreDisplay = localStorage.getItem("scores");

  if (userData === null || userData === "") {
    localStorage.setItem("userData", "player");
  }

  // get result
  function getResult(playersChoice, computersChoice) {
    let score;
    if (playersChoice === "Rock" && computersChoice === "Scissors") {
      score = 1;
    } else if (playersChoice === "Scissors" && computersChoice === "Paper") {
      score = 1;
    } else if (playersChoice === "Paper" && computersChoice === "Rock") {
      score = 1;
    } else {
      score = -1;
    }

    if (playersChoice === computersChoice) {
      score = 0;
    }

    return score;
  }

  // set  gradient and icon
  function setPlayersGradient(playerschoice, computerschoice, images) {
    if (playerschoice === "Rock") {
      setPlayerGradient("gamePlayedRock");
      setplayerchoiceImg(images.Rock);
    } else if (playerschoice === "Scissors") {
      setPlayerGradient("gamePlayedScissors");
      setplayerchoiceImg(images.Scissors);
    } else if (playerschoice === "Paper") {
      setPlayerGradient("gamePlayedPaper");
      setplayerchoiceImg(images.Paper);
    }

    if (computerschoice === "Rock") {
      setComputerGradient("gamePlayedRock");
      setComputerchoiceImg(images.Rock);
    } else if (computerschoice === "Scissors") {
      setComputerGradient("gamePlayedScissors");
      setComputerchoiceImg(images.Scissors);
    } else if (computerschoice === "Paper") {
      setComputerGradient("gamePlayedPaper");
      setComputerchoiceImg(images.Paper);
    }
  }

  // get computerss choice
  const getComputersChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"];

    let randomNumber = Math.floor(Math.random() * 3);

    return choice[randomNumber];
  };

  const getplayersChoice = (e) => {
    let computerschoice = getComputersChoice();
    let score = getResult(e.currentTarget.value, computerschoice);

    setGamesPlayed(true);

    if (score === 1) {
      setDisplayScore(displayScore + 1);
      setDisplayMessage("you win!");
    }

    if (score === -1) {
      setDisplayMessage("you lose!");
    }

    if (score === 0) {
      setDisplayMessage("It's a tie!");
    }

    setPlayersGradient(e.currentTarget.value, computerschoice, icons);
  };

  return (
    <section className="bg-bgRadialGradient min-h-screen text-white py-5 relative">
      <components.Scoreboard playerScore={displayScore} />

      <section className=" w-[180px] h-[40px] overflow-hidden rounded-md bg-white mt-7 mx-auto">
        <button
          className="w-full h-full bg-transparent text-scoreText uppercase text-sm font-bold"
          style={{ letterSpacing: "2px" }}
          onClick={() => {
            setDisplayScore(0);
            setGamesPlayed(false);
            navigate(-1);
          }}
        >
          reset game
        </button>
      </section>

      {!gamesPlayed && (
        <section className=" py-5 max-w-[280px] md:max-w-[350px] mx-auto flex justify-between flex-wrap relative btn-wrapper">
          {buttonDetails.map((icons) => {
            return (
              <components.Icons
                key={icons.id}
                alt={icons.alt}
                icons={icons.icon}
                gradient={icons.gradient}
                getplayersChoice={getplayersChoice}
              />
            );
          })}
        </section>
      )}

      {gamesPlayed && (
        <components.GamesPlayed
          userData={userData}
          computerGradient={computerGradient}
          playerGradient={playerGradient}
          computerIcon={computerChoiceImg}
          playerIcon={playerChoiceimg}
          displayMessage={displayMessage}
          reset={() => setGamesPlayed(false)}
        />
      )}

      <footer className="absolute bottom-0 right-0 left-0 py-5 px-8 flex justify-center 2md:justify-end">
        <div className="btn w-[150px] border-2 border-headerOutline rounded-5 h-[35px] overflow-hidden rounded-md">
          <button
            className="w-full h-full font-light text-xs uppercase hover:text-scoreText hover:bg-headerOutline transition-all"
            style={{ letterSpacing: "2px" }}
            onClick={() => setModal(true)}
          >
            rules
          </button>
        </div>
      </footer>
      {modal && (
        <>
          {createPortal(
            <components.Modal setModal={setModal} />,
            document.body
          )}
        </>
      )}
    </section>
  );
};

export default index;
