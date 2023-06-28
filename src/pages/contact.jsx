import React from "react";
import OurOffices from "../components/OurOffices";
import GetInTouch2 from "../components/GetInTouch2";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div>
      <div className="bg-black min-h-[150px] flex flex-col justify-end  text-white pb-3 items-center">
        <p>Contact Us</p>

        <ArrowDownIcon className="w-4" />
      </div>

      <OurOffices />
      <GetInTouch2 />

      {/* <div>
        <p> Security Agency</p>
        <p>We make protective solutions for peoples safety.</p>
        <p>Adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div> */}
    </div>
  );
};

export default Contact;
