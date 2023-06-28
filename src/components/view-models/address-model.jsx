import React from "react";

const AddressModel = ({ map }) => {
  return (
    <div className="flex mx-5 md:flex-row flex-col justify-between">
      <div className="flex flex-col ">
        <p className="font-bold text-[#330E70]">Rivers State</p>
        <p className=" font-extralight">
           3 Obilor street, off stadium road, rumuomasi,  Rivers State, 
          Nigeria.
        </p>

        <p className="font-bold text-[#F48006]">Opening Hours</p>
        <p className="font-extralight">Mon-Fri: 9am -6pm</p>
        <p className="font-bold text-[#F48006]"> Mobile</p>
        <p className="font-extralight">+2348024448289</p>
      </div>

      <div>{map}</div>
    </div>
  );
};

export default AddressModel;
