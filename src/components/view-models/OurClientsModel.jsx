import React from "react";

const OurClientsModel = ({ image }) => {
  return (
    <div className="w-2/4">
      <img src={image || ""} alt="" />
    </div>
  );
};

export default OurClientsModel;
