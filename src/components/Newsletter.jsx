import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
const Newsletter = () => {
  return (
    <div className="flex md:flex-row flex-col  items-center justify-center py-10  w-4/4 bg-yellow-500  gap-10 ">
      <div>
        <p> Be the first to get updates?</p>
        <p className="font-bold">Subscribe to our Newsletter</p>
      </div>

      <div className="">
        <input
          type="text"
          name=""
          id=""
          className="border-b-2 outline-none   px-5 rounded-full py-3 "
          placeholder="Enter Your Email Address"
        />
        <div className="flex gap-2 py-3">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the{" "}
            <span className="font-semibold text-blue-400">Privacy Policy</span>
          </p>
        </div>
      </div>

      <button className=" btn bg-transparent border-none  px-2 py-3 items-center gap-5 flex ">
        {" "}
        <PaperAirplaneIcon className="w-5" /> Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
