import React, { useState, useEffect } from "react";
import { training_courses } from "../config/training-courses";
import FormInput from "../components/Inputs/FormInput";
import { standard_training } from "../config/standard-training";
import { ToastContainer, toast } from "react-toastify";
import { COMPOSE_EMAIL } from "../services/mailServices";
import { DEFUALT_EMAIL_SENDER } from "../core/constants";
import { useNavigate } from "react-router-dom";

import pattern from "../assets/images/pattern3.jpeg";

const Training = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  const courses_list = standard_training.concat(training_courses);

  const [values, setValue] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    address: "",
    course: courses_list[0].title,
  });
  const sendEmail = async (e) => {
    e.preventDefault();

    const { fullname, email, phone_number, course, address } = values;

    //petty validation

    if (
      fullname === "" ||
      email === "" ||
      phone_number === "" ||
      course === ""
    ) {
      toast.warn("Please fill all information");
      return;
    }

    const response = await COMPOSE_EMAIL({
      to: `${DEFUALT_EMAIL_SENDER}, goodluckcanhelp@gmail.com`,
      // from: "goodluckcanhelp@gmail.c",
      message: `${course} \n Details: \r  Name: ${fullname} \r email: ${email} \r Mobile: ${phone_number}  `,
      subject: `Contact Mail from: ${fullname} - ${email}`,
    });

    console.log(response);
    if (response.isOk) {
      setSuccess(true);
      toast.success("Message sent successfully");

      setTimeout(() => {
        navigate("/");
      }, 3000);
      return;
    }

    toast.error("An error occured");
  };

  const handleOnChnage = (e) => {
    const { value, id } = e.target;

    setValue({ ...values, [id]: value });
  };

  return (
    <div
      className="flex flex-col gap-5 px-5 py-10  bg-gray-100 bg-no-repeat bg-blend-overlay bg-cover  min-h-screen  "
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <p className="text-center font-bold text-2xl">
        Enroll in our Training courses
      </p>
      <div className="">
        <p className="text-xl font-light pb-10 text-center">
          Fill the form below and we'll reach out to you
        </p>
        <div className=" md:w-2/4  md:mx-auto md:bg-gray-100 md:px-5 md:pt-16 rounded-md md:pb-20 px-6">
          <form action="" className="flex flex-col gap-5" onSubmit={sendEmail}>
            <div className="flex gap-3">
              <FormInput
                id={"fullname"}
                placeholder={"fullname"}
                value={values.fullname}
                onChange={handleOnChnage}
                type={"text"}
              />
              <FormInput
                id={"email"}
                placeholder={"Email"}
                value={values.email}
                onChange={handleOnChnage}
                type={"email"}
              />
            </div>
            <div className="flex gap-3">
              <FormInput
                id={"phone_number"}
                placeholder={"Phone Number"}
                value={values.phone_number}
                onChange={handleOnChnage}
                type={"text"}
              />
              <FormInput
                id={"address"}
                placeholder={"Location"}
                value={values.address}
                onChange={handleOnChnage}
                type={"text"}
              />
            </div>

            <div className="py-5 flex flex-col gap-4">
              <p className="font-semibold">Interested Course</p>

              <select
                id="course"
                onChange={handleOnChnage}
                name="courses"
                onFocus={() => {
                  this.size = 6;
                }}
                onBlur={() => {
                  this.size = 0;
                }}
                className="py-4 px-3 rounded-md outline-none    bg-gray-200 w-full"
              >
                {courses_list && courses_list.length >= 1
                  ? courses_list.map((data, index) => {
                      return (
                        <option className="text-[#340d70]  " value={data.title}>
                          {data.title}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>
            <button className="bg-[#340d70] text-white px-6 rounded-sm hover:bg-[#f48005] py-2 hover:font-bold">
              Enroll Now
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Training;
