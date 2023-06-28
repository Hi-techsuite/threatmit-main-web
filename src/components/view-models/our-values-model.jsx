import React from "react";

const OurValuesModel = ({ title, details }) => {
  return (
    <div className=" min-h-[200px] bg-white flex flex-col  py-6 px-4">
      <p className="font-light text-xl  mb-10">{title || "title"}</p>

      <p className="font-thin text-[#979393]">
        {details || "lorem ipsum details"}
      </p>
    </div>
  );
};

export default OurValuesModel;
