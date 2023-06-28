import React from "react";
import logo from "../../assets/images/threat-mit.png";

const Footer = () => {
  return (
    <div className=" bg-[#1D1D1D] text-white px-5  gap-9 flex flex-col">
      <div className="flex md:flex-row flex-col md:justify-normal items-start justify-center items-center gap-4 justify-around pt-10 ">
        <div>
          <img src={logo} className="w-2/5" />
          <p className="text-2xl">
            We Protect
            <span className="font-bold">
              Privacy <br></br> and Business
            </span>
          </p>
        </div>

        <div className="flex flex-col w-2/5">
          <p>Address</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            unde nam numquam quo
          </p>
        </div>
        <div>
          <p>Say Hello</p>

          <p>info@threatmit.com</p>
          <a href="tel:+1 840 841 25 69">+1 840 841 25 69</a>
        </div>
      </div>

      <div className="flex  justify-between py-3">
        <div className="flex justify-between gap-5">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>

        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
