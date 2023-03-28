import React, { useState } from "react";
import * as components from "../../components";
import { buttonDetails } from "../../paths";
import { createPortal } from "react-dom";

const index = () => {
  let userData = localStorage.getItem("userData");
  if (userData === null || userData === "") {
    localStorage.setItem("userData", "player");
  }
  const [modal, setModal] = useState(false);
  return (
    <section className="bg-bgRadialGradient min-h-screen text-white py-5 relative">
      <components.Scoreboard />

      <section className=" py-5 max-w-[280px] mx-auto flex justify-between flex-wrap relative btn-wrapper">
        {buttonDetails.map((icons) => {
          return (
            <components.Icons
              key={icons.id}
              alt={icons.alt}
              icons={icons.icon}
              gradient={icons.gradient}
            />
          );
        })}
      </section>

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
