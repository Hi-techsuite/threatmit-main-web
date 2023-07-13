import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import imag from "../../assets/images/threat-mit.png";

const SlickCarousel = () => {
  return (
    <div className="">
      <Carousel
        // autoPlay
        // infiniteLoop
        interval={3000}
        showArrows={true}
        showStatus={false}
        useKeyboardArrows={true}
      >
        {/*  bg-[url('/src/assets/images/automation.png')] */}
        <section
          data-aos="zoom-in"
          className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex flex-col gap-3   items-center justify-center   "
          style={{
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.93)),
            url('https://threatmits.com/assets/marine-vessel.jpeg') ,url("https://threatmits.com/assets/marine-vessel.jpeg")`,
          }}
        >
          <div className=" flex  gap-3  flex-col   right-20  top-32 bottom-30 items-center justify-center  px-20">
            <p
              data-aos="fade-right"
              className="font-extrabold text-white  md:text-7xl flex flex-col  text-4xl "
            >
              We are Always on Guard for Your Family and Business
            </p>

            <p className="text-2xl text-gray-300">
              Make Sure Your House is a Safe Place
            </p>
            <Link
              to={"/online"}
              className="btn normal  bg-[#F48006]  text-white border-none font-bold  rounded-sm flex  flex-row gap-3"
            >
              more information
              {/* <ShoppingCartIcon className="w-6" /> */}
            </Link>
          </div>
        </section>

        <section
          className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex flex-col gap-3   items-center justify-center   "
          style={{
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.93)),
            url('https://threatmits.com/assets/cctv.jpeg') ,url("https://threatmits.com/assets/cctv.jpeg")`,
          }}
        >
          <div className=" flex  gap-3  flex-col   right-20  top-32 bottom-30 items-center justify-center  px-20">
            <p className="font-extrabold text-white  md:text-4xl flex flex-col  text-4xl ">
              24/7 Survellance
            </p>

            <p className="text-2xl text-gray-300">
              Get survellance of your homes and properties
            </p>
            <Link
              to={"/online"}
              className="btn normal  bg-[#F48006]  text-white border-none font-bold  rounded-sm flex  flex-row gap-3"
            >
              Get in touch
              {/* <ShoppingCartIcon className="w-6" /> */}
            </Link>
          </div>
        </section>
      </Carousel>
    </div>
  );
};

export default SlickCarousel;
