import React from "react";
import AddressModel from "./view-models/address-model";
// import { Carousel } from "react-responsive-carousel";
import { Offices } from "../config/offices";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
// import useCurrentWidth from "../hooks/useCurrentWidth";

const OurOffices = () => {
  // const width = useCurrentWidth();

  return (
    <div className="flex flex-col  items-center py-5 gap-7 ">
      <p className="uppercase text-gray-400 text-xs">
        Visit our Offices Nearby
      </p>

      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={true}
        showStatus={false}
        useKeyboardArrows={true}
        className=" px-4 py-10  "
      >
        {/*  bg-[url('/src/assets/images/automation.png')] */}

        {Offices.map((office, index) => {
          return (
            <AddressModel
              payload={office}
              map={
                <iframe
                  width="100%"
                  height="440"
                  src="https://maps.google.com/maps?width=900&amp;height=800&amp;hl=en&amp;q=Road%205%2C%20Area%20N%2C%20World%20bank%20Housing%20Estate%2C%20Abia%20State+(Threat%20MIT)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              }
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default OurOffices;
