import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import SafetyTrainings from "../components/SafetyTrainings";
import InfoCounter from "../components/InfoCounter";

const Home = () => {
  return (
    <section className="min-h-[100vh] ">
      <Hero />
      <div>
        <p>We Offer Fast, Professional and Exceptional Services</p>
        <div>
          <button>MAKE AN APPOINTMENT</button>
          <button>CONTACT US</button>
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
