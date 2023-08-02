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
        className="flex flex-col gap-5 justify-center items-center bg-center  min-h-[50vh]   bg-gray-100/20 text-black bg-no-repeat bg-blend-overlay bg-cover  bg-[url('./src/assets/images/pattern3.jpeg')]  "
        // style={{
        //   // height: "200px",
        //   backgroundImage: ` linear-gradient(to bottom, rgba(97,165,250, 0.42), rgba(0,0,0, 0.73)),
        //   url(${padlock_img}) ,url(${globe_img})`,
        // }}
      >
        <p className="text-center  mt-16 text-3xl text-black font-semibold">
          About us
        </p>

        <div className="flex gap-3  text-black text-sm">
          <a href="/">HOME</a>
          <p>/</p>
          <p>ABOUT US</p>
        </div>
      </div>

      <OurValues />

      <WhyOrganizationNeedUs />

      {/* <OurVision /> */}
      {/* <Newsletter /> */}
      {/* <Gallery /> */}
      {/* <Testimonies /> */}

      <OurClients />
    </div>
  );
};

export default AboutUs;
