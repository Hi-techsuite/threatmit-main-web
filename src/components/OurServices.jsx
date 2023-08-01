import React from "react";

import OurServicesModel from "./view-models/our-services-model";
import { OurServicesData } from "../config/our-services-data";
import useCurrentWidth from "../hooks/useCurrentWidth";
import Slider from "react-slick";

const OurServices = () => {
  const width = useCurrentWidth();

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    // slidesToShow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: "progressive",
  };

  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-col items-center gap-3">
        <p className="font-semibold mx-auto text-center text-5xl">
          Our Services
        </p>

        <p className="w-[200px] bg-red-400 h-[3px] ">&nbsp;</p>

        <p className="text-sm font-light">Our discrete bespoke solutions</p>
      </div>

      <div>
        <div className="hidden  lg:grid xl:grid lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5">
          {OurServicesData &&
            OurServicesData.length > 1 &&
            OurServicesData.slice(0, 12).map((service, index) => {
              return (
                <OurServicesModel
                  image={service.image}
                  title={service.title}
                  description={service.details}
                  position={service.position}
                />
              );
            })}
        </div>

        <div className="md:flex justify-center gap-5 hidden px-10">
          {OurServicesData &&
            OurServicesData.length > 1 &&
            OurServicesData.slice(12, 14).map((service, index) => {
              return (
                <OurServicesModel
                  image={service.image}
                  title={service.title}
                  description={service.details}
                  position={service.position}
                />
              );
            })}
        </div>
      </div>

      <div
        className={` grid-cols-3 gap-3  md:grid-cols-2 lg:hidden xl:hidden md:grid md:px-5 lg:px-10 hidden  px-10  `}
      >
        {OurServicesData && OurServicesData.length > 1 ? (
          OurServicesData.map((service, index) => {
            return (
              <OurServicesModel
                image={service.image}
                title={service.title}
                description={service.details}
                position={service.position}
              />
            );
          })
        ) : (
          <p>...</p>
        )}
      </div>

      <div className="md:hidden  px-4 py-7">
        <Slider {...settings} dots={true}>
          {OurServicesData && OurServicesData.length > 1 ? (
            OurServicesData.map((service, index) => {
              return (
                <OurServicesModel
                  image={service.image}
                  title={service.title}
                  description={service.details}
                />
              );
            })
          ) : (
            <p>...</p>
          )}
        </Slider>
      </div>
      {/* <div className="md:hidden  px-4 py-7">
        <Slider {...settings} dots={true}>
          {OurServicesData && OurServicesData.length > 1 ? (
            OurServicesData.map((service, index) => {
              return (
                <OurServicesModel
                  image={service.image}
                  title={service.title}
                  description={service.details}
                />
              );
            })
          ) : (
            <p>hello</p>
          )}
        </Slider>
      </div> */}
    </div>
  );
};

export default OurServices;
