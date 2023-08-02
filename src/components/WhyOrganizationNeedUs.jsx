import React from "react";
import { security_guard_img } from "../config/imageFactory";
import { purple } from "../config/colors";

const WhyOrganizationNeedUs = () => {
  return (
    <div className="flex  overflow-hidden md:flex-row flex-col py-4 px-3 gap-10 mx-auto min-h-[300px]  justify-around">
      {/* <div className="relative md:w-2/6">
        <img
          src={"https://threatmits.com/assets/question.png"}
          alt="image"
          className=""
        />
        <div
          className={` hidden md:flex absolute bottom-4 -right-5 h-[100px] w-[100px] bg-[${purple}]`}
        >
          box
        </div>
      </div> */}

      {/* <div className="flex  justify-around py-10 gap-5 md:w-3/5"> */}
      <div className=" z-10 relative font-light text-3xl md:w-3/4   min-h-[250px] flex group  flex-col justify-center  items-center px-10 bg-[#25104a] text-white ">
        <p className=" font-bold transition-all duration-700  ease-in-out group-hover:text-orange-400/30 group-hover:animate-bounce text-gray-100/20 text-[200px] absolute top-[100px] right-[220px]   -z-10  ">
          ?
        </p>
        <p className="z-500">
          Why do <span className="font-bold">organisations trust </span> us{" "}
          <br className="hidden md:flex" />
          with their most 
          <span className="font-bold">critical issues</span>
        </p>
      </div>

      <p className=" leading-loose md:text-2xl text-xl px-5 text-justify  w-full ">
        <span className="font-bold cursor-pointer "> THREATMIT </span>
        as a team has a wealth of Intelligence and Operations experience as we
        have successfully handled over 150 Crisis and Incident Management cases
        and cracked over 300 threat cases.  Our staff have passed through
        Security Management, Counter terrorism and  Security Intelligence
        trainings in Israel, Holland, South Africa and the UK.  Some of our
        Staff are members of NIMC,NEBOSH, ASIS, WSO  and Fellows of NIIS.  we
        develop and demonstrate our expertise through our innovative and
        leading-edge approach to creating and delivering the right solution to
        Security and Safety issues.
      </p>
      {/* </div> */}
    </div>
  );
};

export default WhyOrganizationNeedUs;
