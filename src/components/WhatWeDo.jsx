import React, { useEffect, useRef } from "react";
import securityGuard from "../assets/images/security-guard.jpeg";

import {
  AnimatePresence,
  easeInOut,
  motion,
  spring,
  useAnimate,
  useInView,
} from "framer-motion";

const WhatWeDo = () => {
  return (
    <AnimatePresence>
      <div className="flex min-h-[30vh] h-full  gap-3 w-full px-10 py-10 ">
        <div className="flex flex-col pt-10 gap-5 justify-center items-center ">
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
            className="btn rounded-sm px-4 py-2 font-light hover:bg-[#38106e]  text-center uppercase md:w-1/4 text-white  bg-[#f48006]  "
          >
            About Our Company
          </a>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default WhatWeDo;
