import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Content from "../assets/Content.png";
import NavModal from "./navModal";

const Nav = () => {
  const user = useSelector((state) => (state.User.user ? state.User.user : ""));
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  function capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  console.log(openModal);
  return (
    <div className="navWrapper relative h-12">
      <div className="navBlock   px-6 md:px-12 lg:px-4  flex justify-between items-center ">
        <div className=" md:w-5/6 flex  cursor-pointer ">
          <img
            className=" w-1/4  md:w-20 "
            src={Content}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <div
          className="goToLoginBtn  px-4 py-1 mr-2   select-none 
         text-sm   md:text-md font-bold text-light-call-sec dark:text-dark-call-sec 
          rounded transition-background-color duration-300  cursor-pointer  hover:bg-light-call-sec
           dark:hover:bg-light-bg hover:text-light-bg  dark:hover:text-light-call-sec"
          onClick={() => {
            if (user.firstName) {
              setOpenModal(true);
            } else {
              navigate("/");
            }
          }}
        >
          {user ? capitalizeFirstLetter(user.firstName) : "login"}
        </div>
      </div>
      {openModal ? (
        <NavModal
          closeModal={() => {
            setOpenModal(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
