import React from "react";
import { FaTimes } from "react-icons/fa";
import * as images from "../../assets";

const RulesModal = ({ setModal }) => {
  return (
    <section className="modal fixed top-0 bottom-0 left-0 right-0">
      <div
        className="modal-overlay w-full h-full flex justify-center items-center"
        onClick={() => setModal(false)}
      >
        <div className="bg-white py-5 modal-content rounded-md">
          <div className="modal-header flex justify-between items-center w-90 mx-auto text-headerOutline">
            <h3 className="w-1/2 uppercase">rules</h3>
            <button
              className="bg-transparent border-0 outline-none cursor-pointer"
              onClick={() => setModal(false)}
            >
              <FaTimes />
            </button>
          </div>

          <figure className="m-0 p-0 max-w-[230px] h-[200px] mx-auto mt-5">
            <img
              src={images.RulesImage}
              alt="rules-modal"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default RulesModal;
