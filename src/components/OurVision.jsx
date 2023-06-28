import React from "react";
import {
  globe_img,
  padlock_img,
  security_guard_img,
} from "../config/imageFactory";

const OurVision = () => {
  return (
    <div
      className="text-center bg-center bg-cover flex justify-center items-center text-white flex-col gap-5 px-6"
      style={{
        height: "200px",
        backgroundImage: ` linear-gradient(to bottom, rgba(49,16,93, 0.72), rgba(37,15,91 ,0.83)),
      url(${security_guard_img}) ,url(${globe_img})`,
      }}
    >
      <p className="uppercase font-semibold  text-[10px]">Our Vision</p>

      <p className="font-light text-2xl">
        To be the  leading world class company providing specialised{" "}
        <span className="font-bold">security </span>
        and <span className="font-bold">safety solutions.</span>
      </p>
    </div>
  );
};

export default OurVision;
