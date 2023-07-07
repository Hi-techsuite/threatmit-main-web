import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import SafetyTrainings from "../components/SafetyTrainings";
import InfoCounter from "../components/InfoCounter";

const Home = () => {
  return (
    <section className="min-h-[100vh] w-full overflow-hidden flex flex-col ">
      <Hero />

      <div
        data-aod="slide-up"
        className="flex md:flex-row flex-col  gap-5  bg-[#330e70]  justify-between  text-white md:items-center py-20  px-5 "
        style={{
          background: " rgb(51, 13, 112)",
          background:
            "linear-gradient(17deg, rgba(51,13,112,1) 0%, rgba(244,128,5,1) 100%)",
        }}
      >
        <p className=" w-full text-center text-xl font-light">
          We Offer Fast,{" "}
          <span className="font-bold">
            Professional and Exceptional Services
          </span>
        </p>
        <div className="flex gap-4 md:justify-start justify-center w-full">
          <button className="btn rounded-sm text-white bg-[#f48006] border-none text-xs">
            MAKE AN APPOINTMENT
          </button>
          <button className="tn border-2 px-5 py-3"> CONTACT US ONLINE</button>
        </div>
      </div>
      <WhatWeDo />

      <OurServices />

      <SafetyTrainings />
      <InfoCounter />
    </section>
  );
};

export default Home;
