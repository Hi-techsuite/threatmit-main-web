import React from "react";
import Slider from "react-slick";
import { slider_settings } from "../config/slick-carousel.config";
import OurClientsModel from "./view-models/OurClientsModel";
import { nexim_img, shell_img, tulip_img } from "../config/imageFactory";
import { clients } from "../config/clients";

//**

//   export const nexim_img = nexim;
// export const netco_img = netco;
// export const shell_img = shell;
// export const tulip_img = tulip;

const OurClients = () => {
  return (
    <div className="pointer-events-none relative mt-10 flex gap-10 overflow-hidden">
      {/* <Slider
        {...slider_settings}
        autoplay
        autoplaySpeed={3000}
        className="flex  justify-center items-center"
      >
        {clients.map((client, index) => {
          return <OurClientsModel image={client.logo} />;
        })}

     
      </Slider> */}

      <div className="animate-marquee flex  shrink-0 items-center justify-around gap-20 [animation-direction:reverse]">
        {clients.map((client, index) => {
          return <OurClientsModel image={client.logo} />;
        })}
      </div>
    </div>
  );
};

export default OurClients;
