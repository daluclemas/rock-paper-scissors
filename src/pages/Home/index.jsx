import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as components from "../../components";

const index = () => {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const date = new Date();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", `${username}`);
    navigate("/play-game");
  };
  return (
    <>
      <section className="w-full min-h-screen  text-white py-5 home-body">
        <div className="w-90 mx-auto">
          <header className="w-full mb-5">
            <h1 className="capitalize logo">rock, paper,scissors</h1>
          </header>

          <section className="w-full flex flex-col-reverse md:flex-row  h-full md:gap-10 md:items-center md:justify-between mt-5 md:mt-[80px]">
            <div className="w-full md:w-1/2 welcome mt-5 md:mt-0">
              <h1 className="capitalize text-center md:text-left welcome-text my-2">
                welcome players.
              </h1>

              <p className="text-center md:text-left text-sm w-full md:w-[90%] 2md:w-[80%]">
                Please enter your name to start
              </p>

              <form className="w-full mt-4" onSubmit={handleSubmit}>
                <div className="input-wrapper h-[45px] w-[90%] md:w-[300px] overflow-hidden mx-auto md:mx-0 border-b-white border-b rounded-t-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none bg-[rgba(0,0,0,0.2)] text-[18px] px-2"
                    onChange={handleChange}
                    value={username}
                    autoFocus={true}
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 h-[450px] md:h-[500px] ">
              <components.Carousel />
            </div>
          </section>
        </div>
      </section>

      <footer className="w-90 mx-auto text-white">
        <p className="capitalize text-sm" style={{ letterSpacing: "2px" }}>
          &copy; {date.getFullYear()} all rights reserved.
        </p>
      </footer>
    </>
  );
};

export default index;
