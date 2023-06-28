import React from "react";

const TestimonyViewModel = ({ testimony, testifier, role, company }) => {
  return (
    <div className="bg-white min-w-[150px] mx-3 py-5 px-4 min-h-[300px] flex flex-col gap-5 justify-around">
      <p className="text-gray-400 text-xl">
        {testimony ||
          "Donec suscipit posuere fringilla.Vivamus tristique, odio non efficiturmalesuada, purus quam dictum elit,vitae hendrerit "}
      </p>
      <div>
        <p className="font-bold">{testifier || "Testifier"}</p>
        <p className="text-gray-400">
          {role || "PR Manager"} {company && `-${company}`}
        </p>
      </div>
    </div>
  );
};

export default TestimonyViewModel;
