import React from "react";
import security from "../assets/images/our-services/security.jpeg";
import { training_courses } from "../config/training-courses";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SafetyTrainings = () => {
  return (
    <div className=" ">
      <div className="w-3/4 mx-auto py-10">
        <p className=" uppercase text-xs text-[#A7A7A7]">Education</p>
        <p className="text-2xl">
          Get
          <span className="font-bold"> Safety and Security Trainings</span>
        </p>
      </div>

      <div className=" flex  px-5  gap-5">
        <div className="max-h-[200px] max-w-xs">
          <LazyLoadImage
            alt={security}
            // height={}
            src={security}
            // src={image.src} // use normal <img> attributes as props
            // width={image.width}
          />
          {/* <img src={security} alt="image" className="" /> */}
        </div>
        <div className="w-3/4">
          <p className="text-[#797C7F] font-bold text-sm">
            Get trained professionally in the following areas;
          </p>

          <div className="py-3">
            {training_courses.map((course, index) => {
              return (
                <p className=" md:text-lg text-xs text-[#797C7F]">
                  <span>
                    {" "}
                    {index + 1}. {course.title}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTrainings;
