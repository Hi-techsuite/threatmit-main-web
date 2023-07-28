import React, { useState } from "react";
import FormInput from "./Inputs/FormInput";
import { useNavigate } from "react-router-dom";
import { COMPOSE_EMAIL } from "../services/mailServices";
import { ToastContainer, toast } from "react-toastify";
import Modal1 from "./Modal/Modal1";
import Logo from "./Logo";
import { DEFUALT_EMAIL_SENDER } from "../core/constants";

const GetInTouch2 = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  const [values, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const sendEmail = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone_number, message } = values;

    //petty validation

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone_number === "" ||
      message === ""
    ) {
      toast.warn("Please fill all information");
      return;
    }

    const response = await COMPOSE_EMAIL({
      to: `${DEFUALT_EMAIL_SENDER}, goodluckcanhelp@gmail.com`,
      // from: "goodluckcanhelp@gmail.c",
      message: `Contact Form:  \n 
      Firstname: \t  ${firstname} \n 
      Lastname: \t  ${lastname} \n 
      
       email: ${email} \r Mobile: ${phone_number} 
       Message: ${message} \n
        `,
      subject: `Contact Mail from: ${firstname} - ${email}`,
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
    <div className="flex justify-center ">
      <div className="px-10 py-10 md:w-2/3 w-full ">
        <p className="font-extralight uppercase text-xs">contact us</p>
        <p className="flex flex-col font-light text-2xl">
          Have Questions?{" "}
          <span className="font-bold text-xl">Get in touch!</span>
        </p>

        <form onSubmit={sendEmail} className="flex flex-col gap-4 py-5 ">
          <div className="flex gap-4 md:flex-row flex-col">
            <FormInput
              placeholder={"Firstname"}
              value={values.firstname}
              onChange={handleOnChnage}
              id={"firstname"}
            />
            <FormInput
              placeholder={"lastname"}
              value={values.lastname}
              onChange={handleOnChnage}
              id={"lastname"}
            />
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <FormInput
              placeholder={"Email"}
              value={values.email}
              onChange={handleOnChnage}
              id={"email"}
            />
            <FormInput
              placeholder={"Phone Number"}
              value={values.phone_number}
              onChange={handleOnChnage}
              id={"phone_number"}
            />
          </div>

          <textarea
            className="outline-none w-full min-h-min font-semibold border-b-[1px] border-[#20247b]"
            id="message"
            placeholder="Enter message"
            value={values.message}
            onChange={handleOnChnage}
            // value={values.message}
            // onChange={handleOnChnage}

            // onChange={handleOnChnage}
          />

          <a
            onClick={sendEmail}
            href="#_"
            class="relative   justify-end  px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group md:w-1/4   w-2/4"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class=" relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get In Touch
            </span>
          </a>
        </form>

        <Modal1 visible={success} onClose={() => setSuccess(false)}>
          <div className="flex h-full relative   justify-center items-center flex-col">
            <p>Your request have been submitted</p>
            <p> You'll be contacted shortly</p>

            <Logo className={"absolute top-0 left-0"} />
          </div>
        </Modal1>
        <ToastContainer />
      </div>
    </div>
  );
};

export default GetInTouch2;
