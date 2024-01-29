import React, { useEffect, useRef } from "react";
import "./navModal.css";
import { useNavigate } from "react-router-dom";
import { userSignOut } from "../routes/login/loginAction";
import { useDispatch } from "react-redux";
import { signout_user } from "../actions/userActions";
import { set_Clean_User_Data } from "../actions/contentAction";

const NavModal = ({ closeModal }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  }, []);

  const handleLogout = () => {
    userSignOut();
    localStorage.removeItem("contentBox_Token");
    dispatch(signout_user());
    dispatch(set_Clean_User_Data());
    navigate("/");
  };

  return (
    <div
      className="navModalWrapper absolute bg-light-hover  shadow-xl z-50 p-4 rounded  "
      ref={ref}
    >
      <div className="NnavModalOptions ">
        <div
          className="p-2 cursor-pointer font-medium text-center text-light-call-sec transition-background-color duration-200
         hover:bg-light-call-sec hover:text-light-bg dark:hover:bg-dark-accent   rounded"
          onClick={() => {
            navigate("/content/upload");
          }}
        >
          Upload
        </div>
        <div
          className="p-2 my-1 cursor-pointer font-medium text-center text-light-call-sec transition-background-color duration-200
         hover:bg-light-call-sec hover:text-light-bg dark:hover:bg-dark-accent   rounded"
          onClick={() => {
            handleLogout();
          }}
        >
          logout
        </div>
      </div>
    </div>
  );
};

export default NavModal;
