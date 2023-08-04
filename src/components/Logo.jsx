import React from "react";
import logo from "../assets/images/threat-mit.png";
import { useNavigate } from "react-router-dom";

const Logo = ({ className }) => {
  const navigate = useNavigate();
  let image = "https://threatmits.com/asset/threat-mit.png";
  return (
    <div onClick={() => navigate("/", {})} className={` ${className}`}>
      <img src={image} alt="image" className="w-[150px] " />
    </div>
  );
};

export default Logo;
