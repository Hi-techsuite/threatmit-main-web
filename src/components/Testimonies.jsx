import React from "react";
import TestimonyViewModel from "./view-models/testimony-view-model";
import Slider from "react-slick";
import { slider_settings } from "../config/slick-carousel.config";
import useCurrentWidth from "../hooks/useCurrentWidth";
const Testimonies = () => {
  const width = useCurrentWidth();

  return (
    <div className="bg-[#f6f6f6] min-h-[80vh] py-5 px-3 flex flex-col gap-5">
      <p className="uppercase text-sm text-gray-400 text-center font-bold">
        Testimonials
      </p>
      <p className="text-center text-3xl">
        We Provide services for{" "}
        <span className="font-bold">a huge Number of Customers</span>
      </p>
      <div>
        <Slider {...slider_settings} slidesToShow={width <= 800 ? 2 : 3}>
          <TestimonyViewModel />
          <TestimonyViewModel />
          <TestimonyViewModel />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonies;
