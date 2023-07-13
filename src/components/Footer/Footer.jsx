import React from "react";
import logo from "../../assets/images/threat-mit.png";
import { Link } from "react-router-dom";
import { Offices } from "../../config/offices";

const Footer = () => {
  return (
    <div className=" bg-gray-600 text-white px-5  gap-9 flex flex-col pt-10 bg-gradient-to-r from-gray-600  ">
      <div className="flex md:flex-row gap-4  flex-col items-center justify-between px-10   pt-6 ">
        <div className="md:w-1/6 flex flex-col gap-3">
          <img src={logo} />
          <p className="text-xl">
            We Protect
            <span className="font-bold">
              {" Privacy"} <br></br> and Business
            </span>
          </p>
        </div>

        <div className="flex flex-col w-2/5 items-center gap-2">
          <p className="font-bold">Address</p>
          <p className="font-light">{Offices[0].address}</p>
          <Link
            to={"contact-us"}
            className="bg-[#F48006] px-2 py-3 rounded-md text-xs"
          >
            {" "}
            See All Offices
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <p className="font-bold">For Enguires</p>

          <a href=" mailto:info@threatmit.com">info@threatmit.com</a>
          <a href="tel:+2348079397373" className="font-semibold cursor-pointer">
            +2348079397373
          </a>
        </div>
      </div>

      <div className="flex  justify-between py-3">
        <div className="flex justify-between gap-5">
          <Link className="font-bold text-white" to={"/"}>
            Home
          </Link>
          <Link className="font-bold text-white" to={"/services"}>
            Services
          </Link>
          <Link className="font-bold text-white" to={"/about-us"}>
            About
          </Link>
        </div>

        <p className="text-gray-400">Copyright THREATMIT 2023</p>
      </div>
    </div>
  );
};

export default Footer;
