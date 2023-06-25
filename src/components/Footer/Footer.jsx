import React from "react";
import logo from "../../assets/images/threat-mit.png";

const Footer = () => {
  return (
    <div className="min-h-[300px] bg-[#1D1D1D] text-white px-5  gap-5 flex flex-col">
      <div className="flex gap-4 justify-around">
        <img src={logo} className="" />
        <p className="text-3xl">
          We Protect{" "}
          <span className="font-bold">
            Privacy <br></br> and Business
          </span>
        </p>

        <div className="flex flex-col">
          <p>Address</p>
          <p>
            {" "}
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
