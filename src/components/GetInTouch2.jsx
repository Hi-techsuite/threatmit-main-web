import React from "react";
import FormInput from "./Inputs/FormInput";

const GetInTouch2 = () => {
  return (
    <div className="px-10 py-10">
      <p className="font-extralight uppercase text-xs">contact us</p>
      <p className="flex flex-col font-light text-2xl">
        Have Questions? <span className="font-bold text-xl">Get in touch!</span>
      </p>

      <form
        action="
      "
      >
        <div className="flex gap-8">
          <FormInput placeholder={"Firstname"} />
          <FormInput placeholder={"lastname"} />
        </div>
        <div className="flex gap-8">
          <FormInput placeholder={"Email"} />
          <FormInput placeholder={"Phone Number"} />
        </div>

        <textarea
          className="outline-none w-full min-h-min font-semibold border-b-[1px] border-[#20247b]"
          id="message"
          placeholder="Enter message"
          // value={values.message}
          // onChange={handleOnChnage}

          // onChange={handleOnChnage}
        />

        <button className="btn">Get in touch</button>
      </form>
    </div>
  );
};

export default GetInTouch2;
