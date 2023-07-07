import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import SafetyTrainings from "../components/SafetyTrainings";
import InfoCounter from "../components/InfoCounter";

const Home = () => {
  return (
    <section className="min-h-[100vh] w-full overflow-hidden">
      <Hero />
      <div className="flex md:flex-row flex-col   gap-4  bg-[#330e70]  text-white md:items-center   py-10 px-5 ">
        <p className="md:w-2/5 w-full text-center text-xl font-light">
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
