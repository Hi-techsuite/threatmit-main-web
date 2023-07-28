import React from "react";
import security from "../assets/images/our-services/security.jpeg";
import { training_courses } from "../config/training-courses";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { standard_training } from "../config/standard-training";

const SafetyTrainings = () => {
  return (
    <div className=" ">
      <div className="w-3/4 mx-auto py-0 pb-5 pt-5">
        <p className=" uppercase text-xs text-[#A7A7A7]"></p>
        <p className="text-2xl">
          Take Advantage of our
          <span className="font-bold"> Safety and Security Trainings</span>
        </p>
      </div>

      <div className="flex justify-center md:flex-row flex-col gap-10 px-10">
        <section className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex  gap-3    w-full   border-2     rounded-md">
          <div className="py-3   px-3 text-black items-start flex rounded-md flex-col gap-4  ">
            <p className="font-bold pt-4">Standard Training Modules</p>
            {standard_training.map((course, index) => {
              return (
                <a
                  href="/training"
                  className="  flex items-center group gap-2 md:text-lg text-sm cursor-pointer transition-all duration-1000  ease-in-out"
                >
                  <span
                    className="group-hover:text-[#340d70] group-hover:font-bold group-hover:text-2xl group-hover:text-transparent group-hover:bg-clip-text duration-300 ease-in-out  group-hover:bg-gradient-to-tr from-[#340d70] to-[#f48005]"

                    // className="group-hover:font-bold group-hover:text-[#340d70]"
                  >
                    {course.title}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex flex-col gap-3  rounded-md   border-2  w-full   ">
          <div className="  py-5 px-3 text-black items-start flex rounded-md flex-col gap-4 ">
            <p className="font-bold">Safety Standard Training Modules</p>
            {training_courses.map((course, index) => {
              return (
                <a
                  href="/training"
                  className="  flex items-center group gap-2 md:text-lg text-sm cursor-pointer   transition-all duration-1000  ease-in-out "
                >
                  <span class="relative flex h-3 w-3 hidden group-hover:flex  ">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f48005] opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-[#340d70]"></span>
                  </span>
                  <span className="group-hover:text-[#340d70] group-hover:font-bold group-hover:text-2xl group-hover:text-transparent group-hover:bg-clip-text duration-300 ease-in-out  group-hover:bg-gradient-to-tr from-[#340d70] to-[#f48005]">
                    {course.title}
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SafetyTrainings;
