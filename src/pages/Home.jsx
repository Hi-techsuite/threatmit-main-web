import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import SafetyTrainings from "../components/SafetyTrainings";
import InfoCounter from "../components/InfoCounter";

const Home = () => {
  return (
    <section className="min-h-[100vh] ">
      {/* <Hero /> */}
      <div className="flex   bg-[#330e70]  text-white items-center  py-10 px-5 justify-around">
        <p className="w-2/5 font-light">
          We Offer Fast,{" "}
          <span className="font-bold">
            Professional and Exceptional Services
          </span>
        </p>
        <div className="flex gap-4">
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
