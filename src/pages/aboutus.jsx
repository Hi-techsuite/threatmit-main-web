import React from "react";
import OurValues from "../components/OurValues";
import WhyOrganizationNeedUs from "../components/WhyOrganizationNeedUs";
import OurVision from "../components/OurVision";
import Newsletter from "../components/Newsletter";
import Gallery from "../components/Gallery";
import Testimonies from "../components/Testimonies";
import { globe_img, padlock_img } from "../config/imageFactory";
import OurClients from "../components/OurClients";

const AboutUs = () => {
  return (
    <div className="">
      <div
        className="flex justify-center items-center bg-center bg-cover"
        style={{
          height: "200px",
          backgroundImage: ` linear-gradient(to bottom, rgba(97,165,250, 0.42), rgba(0,0,0, 0.73)),
          url(${padlock_img}) ,url(${globe_img})`,
        }}
      >
        <p className="text-center text-3xl text-white font-semibold">
          About us
        </p>
      </div>

      <OurValues />

      <WhyOrganizationNeedUs />

      <OurVision />
      <Newsletter />
      {/* <Gallery /> */}
      <Testimonies />

      <OurClients />
    </div>
  );
};

export default AboutUs;
