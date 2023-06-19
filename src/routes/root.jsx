import React from "react";
import PublicNav from "../components/Nav/PublicNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <PublicNav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
