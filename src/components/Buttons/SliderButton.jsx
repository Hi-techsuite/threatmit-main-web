import React from "react";
import { Link } from "react-router-dom";

const SliderButton = ({ href, title }) => {
  return (
    <div>
      <Link
        to={`${href}`}
        className="btn normal  bg-[#F48006] md:max-w-[200px]   min-w[200px] text-white border-none font-bold  rounded-sm flex   flex-row gap-3 hover:bg-[#340d70] hover:text-white"
      >
        {title || "Read More"}
      </Link>
    </div>
  );
};

export default SliderButton;
