import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import SafetyTrainings from "../components/SafetyTrainings";
import InfoCounter from "../components/InfoCounter";
import OurClients from "../components/OurClients";
import { HomeCarousel } from "../components/Carousel";
import waves from "../assets/images/svgs/waves.svg";
import pattern from "../assets/images/pattern3.jpeg";

const Home = () => (
  <section
    className="min-h-[100vh] w-full overflow-hidden flex flex-col bg-gray-100 bg-no-repeat bg-blend-overlay bg-cover        "
    style={{
      backgroundImage: `url(${pattern})`,
    }}
  >
    <HomeCarousel />

    <div
      data-aod="slide-up"
      className="flex md:flex-row flex-col  gap-5  bg-[#330e70]  justify-between  text-white md:items-center py-20   relative px-5 "
      style={{
        background: " rgb(51, 13, 112)",

        background:
          "linear-gradient(17deg, rgba(51,13,112,1) 0%, rgba(244,128,5,1) 100%)",
      }}
    >
      <p className=" w-full text-center text-xl font-light">
        We Offer Fast,{" "}
        <span className="font-bold">Professional and Exceptional Services</span>
      </p>
      <div className="flex gap-4 md:justify-start justify-center w-full">
        <a
          href="/contact-us"
          className="btn px-4 py-2 rounded-sm text-white bg-[#f48006] border-none text-xs"
        >
          MAKE AN APPOINTMENT
        </a>
      </div>
    </div>
    <WhatWeDo />

    <OurServices />

    <SafetyTrainings />

    <OurClients />
  </section>
);

export default Home;
