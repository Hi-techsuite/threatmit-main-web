import React from "react";
import OurServices from "../components/OurServices";
import { OurServicesData } from "../config/our-services-data";
import OurServicesModel from "../components/view-models/our-services-model";

const Services = () => {
  return (
    <div className="min-h-[100vh]">
      {/* <OurServices /> */}
      <div className=" grid-cols-3 gap-3  md:grid-cols-4 md:grid     px-3">
        {OurServicesData && OurServicesData.length > 1 ? (
          OurServicesData.map((service, index) => {
            return (
              <OurServicesModel
                image={service.image}
                title={service.title}
                description={service.details}
                position={service.position}
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

export default Services;
