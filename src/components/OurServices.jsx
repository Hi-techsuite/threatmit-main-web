import React from "react";
import OurServicesModel from "./view-models/our-services-model";
import { OurServicesData } from "../config/our-services-data";
import useCurrentWidth from "../hooks/useCurrentWidth";
import Slider from "react-slick";

const OurServices = () => {
  const width = useCurrentWidth();

  var settings = {
    dots: true,
    // infinite: true,
    autoplay: true,
    speed: 300,
    // slidesToShow: 4,
    slidesToShow: width <= 800 ? 1 : 5,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "progressive",
    dots: false,
    asNavFor: false,
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

      <div className=" grid-cols-3 gap-3  md:grid-cols-4 md:grid  hidden   px-3">
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
          <p>hello</p>
        )}
      </div>

      <div className="md:hidden ">
        <Slider {...settings}>
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
      </div>
    </div>
  );
};

export default OurServices;
