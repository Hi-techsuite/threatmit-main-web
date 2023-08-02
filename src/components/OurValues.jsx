import React from "react";
import OurValuesModel from "./view-models/our-values-model";
import { ourValues } from "../config/ourValues";

const OurValues = () => {
  return (
    <div className="bg-transparent py-10 cursor-pointer  ">
      <p className="font-light text-2xl  py-10 text-center">
        Our <span className="font-bold ">Values</span>
      </p>
      <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-5 px-10">
        {ourValues.map((value, index) => {
          return (
            <OurValuesModel
              title={value.title}
              key={index}
              details={value.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurValues;
