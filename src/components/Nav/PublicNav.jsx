import React, { useState } from "react";
import logo from "../../assets/images/threat-mit.png";
import { navMenu } from "../../config/nav_menu";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
        <div className="   gap-4 px-24 hidden md:flex text-black font-bold  lg:flex sm:hidden py-1">
          {navMenu &&
            navMenu.length > 1 &&
            navMenu.map((menu, index) => {
              return (
                <NavLink
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
      </div>

      <a
        href="tel:+234807939373"
        className="text-[#330E70] hidden md:flex font-bold"
      >
        +2348079397373
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
