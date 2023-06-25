import React from "react";
import OurServicesModel from "./view-models/our-services-model";
import { OurServicesData } from "../config/our-services-data";

const OurServices = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-col items-center gap-3">
        <p className="font-semibold mx-auto text-center text-5xl">
          Our Services
        </p>

        <p className="w-[200px] bg-red-400 h-[3px] ">&nbsp;</p>

        <p className="text-sm font-light">Our discrete bespoke solutions</p>
      </div>

      <div className="grid md:grid-cols-3 gap-3  grid-cols-1 px-3">
        {OurServicesData && OurServicesData.length > 1 ? (
          OurServicesData.map((service, index) => {
            return (
              <OurServicesModel
                image={service.image}
                title={service.title}
                description={service.details}
              />
            );
          })
        ) : (
          <p>hello</p>
        )}
      </div>
    </div>
  );
};

export default OurServices;
