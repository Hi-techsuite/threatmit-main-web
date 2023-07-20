import React, { useState } from "react";
import logo from "../../assets/images/threat-mit.png";
import { navMenu } from "../../config/nav_menu";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  HomeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Modal1 from "../Modal/Modal1";
import RightModal from "../Modal/RightModal";

const PublicNav = () => {
  const [mobileNav, setMobildNav] = useState(false);
  return (
    <div className="flex bg-[#F6EEEE] py-3 px-2 gap-4 justify-between items-center ">
      <div>
        <img src={logo} alt="image" className="w-20 " />
      </div>
      <div className="flex ">
        <div className="   gap-7 px-24 hidden md:flex text-black font-bold  lg:flex sm:hidden py-1">
          {navMenu &&
            navMenu.length > 1 &&
            navMenu.map((menu, index) => {
              return (
                <NavLink
                  to={menu.link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-bold"
                      : "font-light hover:font-bold  relative group  transition-all ease-in-out "
                  }
                >
                  <p className="group-hover:scale-125 group-hover:text-transparent group-hover:bg-clip-text  group-hover:bg-gradient-to-tr from-[#340d70] to-[#f48005]">
                    {menu.name}
                  </p>
                  {/* <span className="absolute h-0.5 w-0  group-hover:w-full group-hover:transition-all  ease-in-out  delay-100  bg-[#340d70]  px-0">
                    {" "}
                    &nbsp;
                  </span> */}
                </NavLink>
              );
            })}
        </div>
      </div>

      <a
        href="tel:+2348136042622"
        className="text-[#330E70] hidden md:flex font-bold items-center group  hover:text-[#F48006]"
      >
        <PhoneIcon className="w-5 group-hover:scale-105 group-hover:rotate-45 group-hover:text-[#F48006]  transition-all ease-linear " />
        +234 813 604 2622
      </a>

      <Link to={"/contact-us"} className="btn bg-[#F48006] rounded-sm ">
        Contact us
      </Link>

      <Bars3Icon
        className="w-8 cursor-pointer  md:hidden"
        onClick={() => setMobildNav(true)}
      />

      <RightModal visible={mobileNav} onClose={() => setMobildNav(false)}>
        <p
          className="text-right self-end lowercase   font-light  hover:font-bold cursor-pointer"
          onClick={() => setMobildNav(false)}
        >
          <XMarkIcon className="w-6 text-gray-400 hover:text-red-600" />
        </p>
        <div className="flex flex-col gap-10 py-10 px-3">
          {navMenu &&
            navMenu.length > 1 &&
            navMenu.map((menu, index) => {
              return (
                <NavLink
                  onClick={() => setMobildNav(false)}
                  to={menu.link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "after:h-1  after:bg-gray-700 after:absolute relative  after:w-full after:-bottom-1 after:left-0  after:content-['']"
                      : "font-light"
                  }
                >
                  <p>{menu.name}</p>
                </NavLink>
              );
            })}
        </div>
      </RightModal>
    </div>
  );
};

export default PublicNav;
