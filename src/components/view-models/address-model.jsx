import React from "react";

const AddressModel = ({ map, payload }) => {
  return (
    <div className="flex mx-5 md:flex-row flex-col justify-center">
      <div className="flex flex-col ">
        <p className="font-bold text-[#330E70]">{payload.name}</p>
        <p className=" font-extralight">{payload.address}</p>

        <p className="font-bold text-[#F48006]">Opening Hours</p>
        <p className="font-extralight">Mon-Fri: 9am -6pm</p>
        <p className="font-bold text-[#F48006]"> Mobile</p>
        <a href={`tel:${payload.telephone}`} className="font-extralight">
          {payload.telephone}
        </a>
      </div>

      <div className="md:px-0 px-0">{map}</div>
    </div>
  );
};

export default AddressModel;
