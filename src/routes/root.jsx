import React from "react";
import PublicNav from "../components/Nav/PublicNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { Offices } from "../config/offices";

const Root = () => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex flex-col  bottom-32 right-8 z-40  fixed">
        <a
          className="flex flex-col items-center"
          target="_blank"
          href={`https://wa.me/${Offices[0].telephone}`}
        >
          <IoLogoWhatsapp className=" text-green-600" size={"50px"} />
          <span>Chat us Now!!</span>
        </a>
      </div>
      <PublicNav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
