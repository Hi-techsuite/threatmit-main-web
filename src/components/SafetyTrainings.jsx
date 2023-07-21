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
      <div className="w-3/4 mx-auto py-10">
        <p className=" uppercase text-xs text-[#A7A7A7]"></p>
        <p className="text-2xl">
          Take Advantage of our
          <span className="font-bold"> Safety and Security Trainings</span>
        </p>
      </div>

      <div>
        <Carousel
          // autoPlay
          // infiniteLoop
          interval={5000}
          showArrows={false}
          showStatus={false}
          useKeyboardArrows={true}
        >
          {/*  bg-[url('/src/assets/images/automation.png')] */}

          <section className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex flex-col gap-3     mx-5    ">
            <div className="py-3  py-5 px-3 text-black items-start flex rounded-md flex-col gap-4 ">
              <p></p>
              {standard_training.map((course, index) => {
                return (
                  <a
                    href="/training"
                    className="  flex items-center group gap-2 md:text-lg text-sm cursor-pointer transition-all duration-1000  ease-in-out"
                  >
                    <span class="relative flex h-3 w-3 hidden group-hover:flex  ">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f48005] opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-[#340d70]"></span>
                    </span>
                    <span className="group-hover:font-bold group-hover:text-[#340d70]">
                      {" "}
                      {course.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex flex-col gap-3     mx-5    ">
            <div className="py-3  py-5 px-3 text-black items-start flex rounded-md flex-col gap-4 ">
              <p></p>
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
                    <span className="group-hover:font-bold group-hover:text-[#340d70]">
                      {course.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </Carousel>
      </div>
    </div>
  );
};

export default SafetyTrainings;
