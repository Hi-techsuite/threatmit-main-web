import React, { useState } from "react";
import OurOffices from "../components/OurOffices";
import GetInTouch2 from "../components/GetInTouch2";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { DEFUALT_EMAIL_SENDER } from "../core/constants";
import { COMPOSE_EMAIL } from "../services/mailServices";
import Modal1 from "../components/Modal/Modal1";
import Logo from "../components/Logo";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-black min-h-[150px] flex gap-2 flex-col justify-end  text-white pb-3 items-center">
        <p>Contact Us</p>

        <ArrowDownIcon className="w-4 animate-ping" />
      </div>

      <OurOffices />
      <GetInTouch2 />

      {/* <div>
        <p> Security Agency</p>
        <p>We make protective solutions for peoples safety.</p>
        <p>Adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div> */}

      <ToastContainer />
    </div>
  );
};

export default Contact;
