import React from "react";
import OurServices from "../components/OurServices";
import { OurServicesData } from "../config/our-services-data";
import OurServicesModel from "../components/view-models/our-services-model";

const Services = () => {
  return (
    <div className="min-h-[100vh]   bg-gray-100 bg-no-repeat bg-blend-overlay bg-cover  bg-[url('https://threatmits.com/assets/pattern2.jpeg')]  ">
      <OurServices />
    </div>
  );
};

export default Services;
