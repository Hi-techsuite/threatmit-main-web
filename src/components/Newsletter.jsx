import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
const Newsletter = () => {
  return (
    <div className="flex md:flex-row flex-col  items-center justify-center py-10  w-2/4  my-5 mx-auto gap-10 ">
      <div>
        <p> Be the first to get updates?</p>
        <p className="font-bold">Subscribe to our Newsletter</p>
      </div>

      <div className="">
        <input
          type="text"
          name=""
          id=""
          className="border-b-2 outline-none   "
          placeholder="Enter Your Email Address"
        />
        <div className="flex">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the <span>Privacy Policy</span>
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
