import React from "react";
import OurValues from "../components/OurValues";
import WhyOrganizationNeedUs from "../components/WhyOrganizationNeedUs";
import OurVision from "../components/OurVision";
import Newsletter from "../components/Newsletter";
import Gallery from "../components/Gallery";
import Testimonies from "../components/Testimonies";

const AboutUs = () => {
  return (
    <div>
      <div>
        <p>About us</p>
      </div>

      <OurValues />

      <WhyOrganizationNeedUs />

      <OurVision />
      <Newsletter />
      <Gallery />
      <Testimonies />
    </div>
  );
};

export default AboutUs;
