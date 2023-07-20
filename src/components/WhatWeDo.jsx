import React from "react";
import securityGuard from "../assets/images/security-guard.jpeg";
const WhatWeDo = () => {
  return (
    <div className="flex min-h-[30vh] h-full  gap-3 w-full px-10 py-10 ">
      <div className="flex flex-col pt-10 gap-5 ">
        <p className="text-2xl  md:text-4xl">
          What
          <span className="font-bold  "> we do...</span>
        </p>

        <p className="font-light  md:w-2/4 ">
          We provide discrete bespoke security and safety solutions for our
          clients both in Africa and internationally. . We bring more than a
          decade of innovation, expertise and experience, customer driven
          methods, and proven results of our solutions.
        </p>
        <a
          href="/about-us"
          className="btn rounded-sm font-light uppercase md:w-1/4 text-white  bg-[#f48006]  "
        >
          About Our Company
        </a>
      </div>
    </div>
  );
};

export default WhatWeDo;
