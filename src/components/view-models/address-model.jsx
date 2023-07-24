import React from "react";

const AddressModel = ({ map, payload }) => {
  return (
    <div className=" flex flex-col gap-7 justify-center items-center">
      <div className="flex flex-col items-center  px-5">
        <p className="font-bold text-[#330E70]">{payload.name}</p>
        <p className=" font-extralight w-2/3 text-center">{payload.address}</p>

        <p className="font-bold text-[#F48006]">Opening Hours</p>
        <p className="font-extralight">Mon-Fri: 9am -6pm</p>
        <p className="font-bold text-[#F48006]"> Mobile</p>
        <a href={`tel:${payload.telephone}`} className="font-extralight">
          {payload.telephone}
        </a>
      </div>

      <div className="md:w-3/4 w-1/4 flex justify-center items-center">
        {map}
      </div>
    </div>
  );
};

export default AddressModel;
