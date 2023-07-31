import React from "react";

const OurClientsModel = ({ image }) => {
  return (
    <div className="w-[100px]">
      <img src={image || ""} alt="" />
    </div>
  );
};

export default OurClientsModel;
