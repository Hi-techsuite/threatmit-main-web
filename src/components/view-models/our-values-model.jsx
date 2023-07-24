import React from "react";

const OurValuesModel = ({ title, details }) => {
  return (
    <div className=" min-h-[200px] hover:bg-[#330d70] hover:text-white rounded-md bg-white flex flex-col  py-6 px-4 transform hover:-translate-y-2 transition-all duration-700 ease-in-out group">
      <p className="font-light text-xl group-hover:scale-105 group-hover:translate-x-5 group-hover:font-bold  transition-all mb-10">
        {title || "title"}
      </p>

      <p className="font-thin text-[#979393]">
        {details || "lorem ipsum details"}
      </p>
    </div>
  );
};

export default OurValuesModel;
