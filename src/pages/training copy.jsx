import React from "react";
import { training_courses } from "../config/training-courses";

const Training = () => {
  return (
    <div className="flex flex-col gap-5 px-5 py-10">
      <p className="text-center font-bold text-2xl">
        Enroll in our Training courses
      </p>
      <div className="w-3/4">
        <div className="py-3">
          {training_courses.map((course, index) => {
            return (
              <p className=" md:text-lg text-xs text-[#797C7F] py-3">
                <span>
                  {" "}
                  {index + 1}. {course.title}
                </span>
              </p>
            );
          })}
        </div>
        <div className="">
          <button className="bg-[#340d70] text-white px-6 rounded-sm hover:bg-[#f48005] py-2 hover:font-bold">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Training;
