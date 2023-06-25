import React from "react";

const InfoCounter = () => {
  return (
    <div className="flex gap-3 justify-around">
      <div className="relative h-[200px]">
        <p className="text-8xl font-extrabold text-[#efefef]">98</p>
        <div className="absolute top-10 left-10 right-1 font-bold">
          <p>security</p>
        </div>
      </div>
      <div className="relative h-[200px]">
        <p className="text-8xl font-extrabold text-[#efefef]">98</p>
        <div className="absolute top-10 left-10 right-1 font-bold">
          <p>security</p>
        </div>
      </div>
      <div className="relative h-[200px]">
        <p className="text-8xl font-extrabold text-[#efefef]">98</p>
        <div className="absolute top-10 left-10 right-1 font-bold">
          <p>security</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCounter;
