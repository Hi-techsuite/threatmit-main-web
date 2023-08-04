import React from "react";
import AddressModel from "./view-models/address-model";
// import { Carousel } from "react-responsive-carousel";
import { Offices } from "../config/offices";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
// import useCurrentWidth from "../hooks/useCurrentWidth";

const OurOffices = () => {
  // const width = useCurrentWidth();

  const source =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9045572209034!2d5.20977937501149!3d7.251702692754877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478fe9355200d1%3A0xd38013a6f3036b2!2s42b%20Oba%20Adesida%20Road%2C%20Alagbaka%20340110%2C%20Akure%2C%20Ondo!5e0!3m2!1sen!2sng!4v1688728106365!5m2!1sen!2sng";

  return (
    <div className="flex flex-col  items-center py-5 gap-7 overflow-hidden ">
      <p className="uppercase text-gray-400 text-xs">
        Visit our Offices Nearby
      </p>

      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={true}
        showStatus={false}
        useKeyboardArrows={true}
        className=" px-4 py-10  "
        // renderIndicator={(e, isSelected, index, label) => {
        //   return (
        //     <div
        //       onClick={() => {
        //         // alert(JSON.stringify(label));
        //       }}
        //       className={`h-[10px]  rounded-full w-[10px] inline-block cursor-pointer  bg-red-300  ${
        //         isSelected && "bg-blue-500"
        //       } hover:bg-green-300  mx-2 `}
        //       title={label}
        //     >
        //       &nbsp;
        //     </div>
        //   );
        // }}
      >
        {/*  bg-[url('/src/assets/images/automation.png')] */}

        {Offices.map((office, index) => {
          return (
            <AddressModel
              payload={office}
              map={
                <iframe
                  src={office.map.src}
                  className="  "
                  width="100vw"
                  height="500"
                  // style="border:0;"
                  style={{ border: 0 }}
                  // allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
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
