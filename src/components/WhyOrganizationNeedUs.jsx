import React from "react";
import { security_guard_img } from "../config/imageFactory";
import { purple } from "../config/colors";

const WhyOrganizationNeedUs = () => {
  return (
    <div className="flex md:flex-row flex-col py-4 px-3 gap-10 w-3/4 mx-auto">
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

      <div className="flex flex-col py-10 gap-5 md:w-3/5">
        <p className="font-light text-3xl">
          Why do <span className="font-bold">organisations trust </span> us{" "}
          <br className="hidden md:flex" />
          with their most 
          <span className="font-bold"> critical issues?</span>
        </p>

        <p className="text-sm leading-5">
          <span className="font-bold">THREATMIT </span>
          as a team has a wealth of Intelligence and Operations experience as we
          have successfully handled over 150 kidnap cases and cracked over 300
          threat cases.  Our staff have passed through Security Management,
          Counter terrorism and  Security Intelligence trainings in Israel,
          Holland, South Africa and the UK.  Some of our Staff are members of
          NIMC,NEBOSH, ASIS, WSO  and Fellows of NIIS.  we develop and
          demonstrate our expertise through our innovative and leading-edge
          approach to creating and delivering the right solution to Security and
          Safety issues.
        </p>
      </div>
    </div>
  );
};

export default WhyOrganizationNeedUs;
