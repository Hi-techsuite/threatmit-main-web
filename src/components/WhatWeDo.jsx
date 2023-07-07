import React from "react";
import securityGuard from "../assets/images/security-guard.jpeg";
const WhatWeDo = () => {
  return (
    <div className="flex min-h-[50vh] h-full justify-around gap-3 w-full px-3 py-10">
      <div className="h-full">
        <img
          data-aos="fade-left"
          src={securityGuard}
          alt="guard"
          className="min-h-[400px] bg-center object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <p className="text-2xl ">
          What
          <span className="font-bold"> we do...</span>
        </p>

        <p className="font-light text-sm ">
          We provide discrete bespoke security and safety solutions for our
          clients both in Africa and internationally. . We bring more than a
          decade of innovation, expertise and experience, customer driven
          methods, and proven results of our solutions.
        </p>
        <button className="btn rounded-sm font-light uppercase w-2/4 text-white  bg-[#f48006]  ">
          About Our Company
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
