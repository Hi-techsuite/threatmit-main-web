import React from "react";
import OurServices from "../components/OurServices";
import { OurServicesData } from "../config/our-services-data";
import OurServicesModel from "../components/view-models/our-services-model";

const Services = () => {
  return (
    <div className="min-h-[100vh]">
      <OurServices />
    </div>
  );
};

export default Services;
