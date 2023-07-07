import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./fonts.css";
// import "./app.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-screen.jsx";
import Root from "./routes/root";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutus";
import { AppConfig } from "./config/config";
import Training from "./pages/training";
import Services from "./pages/services";

// import fonts

import "./assets/fonts/Inter-Black.ttf";
import "./assets/fonts/Inter-Bold.ttf";
import "./assets/fonts/Inter-ExtraBold.ttf";
import "./assets/fonts/Inter-ExtraLight.ttf";
import "./assets/fonts/Inter-Light.ttf";
import "./assets/fonts/Inter-Medium.ttf";
import "./assets/fonts/Inter-Regular.ttf";
import "./assets/fonts/Inter-SemiBold.ttf";
import "./assets/fonts/Inter-Thin.ttf";

Aos.init({});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AppConfig.routes.home,
        element: <Home />,
      },
      {
        path: AppConfig.routes.contact_us,
        element: <Contact />,
      },
      {
        path: AppConfig.routes.about_us,
        element: <AboutUs />,
      },
      {
        path: AppConfig.routes.training,
        element: <Training />,
      },
      {
        path: AppConfig.routes.services,
        element: <Services />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
