import React from "react";
import Slider from "react-slick";
import { slider_settings } from "../config/slick-carousel.config";
import OurClientsModel from "./view-models/OurClientsModel";
import { nexim_img, shell_img, tulip_img } from "../config/imageFactory";

//**

//   export const nexim_img = nexim;
// export const netco_img = netco;
// export const shell_img = shell;
// export const tulip_img = tulip;

const OurClients = () => {
  return (
    <div className="px-5 py-5 ">
      <Slider {...slider_settings} autoplay autoplaySpeed={3000}>
        <OurClientsModel image={nexim_img} />
        <OurClientsModel image={shell_img} />
        <OurClientsModel image={tulip_img} />
        <OurClientsModel image={nexim_img} />
        <OurClientsModel image={nexim_img} />
        <OurClientsModel image={shell_img} />
        <OurClientsModel image={tulip_img} />
        <OurClientsModel image={nexim_img} />
      </Slider>
    </div>
  );
};

export default OurClients;
