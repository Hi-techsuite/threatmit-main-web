import React from "react";

const AddressModel = ({ map, payload }) => {
  return (
    <div className="flex mx-5 md:flex-row flex-col md:items-start items-center justify-center  gap-5">
      <div className="flex flex-col   px-5">
        <p className="font-bold text-[#330E70]">{payload.name}</p>
        <p className=" font-extralight">{payload.address}</p>

        <p className="font-bold text-[#F48006]">Opening Hours</p>
        <p className="font-extralight">Mon-Fri: 9am -6pm</p>
        <p className="font-bold text-[#F48006]"> Mobile</p>
        <a href={`tel:${payload.telephone}`} className="font-extralight">
          {payload.telephone}
        </a>
      </div>

      <div className="md:px-1 px-0 md:w-2/4 w-2/6 ">{map}</div>
    </div>
  );
};

export default AddressModel;
