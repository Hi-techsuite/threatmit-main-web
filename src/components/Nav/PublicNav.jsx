import React from "react";
import logo from "../../assets/images/threat-mit.png";
import { navMenu } from "../../config/nav_menu";
import { Link, NavLink } from "react-router-dom";

const PublicNav = () => {
  return (
    <div className="flex bg-[#F6EEEE] py-5 px-2 gap-4 justify-between items-center">
      <img src={logo} alt="image" className="w-20 " />
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

      <a href="tel:080000000" className="text-[#330E70] font-bold">
        1 800 458 56 97
      </a>

      <Link to={"/contact-us"} className="btn bg-[#F48006] rounded-sm ">
        Contact us
      </Link>
    </div>
  );
};

export default PublicNav;
