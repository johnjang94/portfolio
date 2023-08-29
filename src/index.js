import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// CONTENT
import InitialLanding from "./pages/InitialLanding";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import UXDesign from "./pages/UXDesign";
import FrontEnd from "./pages/FrontEnd";

// CONTENT DETAIL - UX DESIGN
import TeleVUIntroduction from "./pages_detail/ux_project/televu/TeleVUIntroduction";
import TeleVUResearch from "./pages_detail/ux_project/televu/TeleVUResearch";
import TeleVUDesign from "./pages_detail/ux_project/televu/TeleVUDesign";
import TeleVUUsability from "./pages_detail/ux_project/televu/TeleVUUsability";
import TeleVUReflection from "./pages_detail/ux_project/televu/TeleVUReflection";
import TuGoIntroduction from "./pages_detail/ux_project/tugo/TuGoIntroduction";
import TuGoResearch from "./pages_detail/ux_project/tugo/TuGoResearch";
import TuGoDesign from "./pages_detail/ux_project/tugo/TuGoDesign";
import TuGoUsability from "./pages_detail/ux_project/tugo/TuGoUsability";
import TuGoReflection from "./pages_detail/ux_project/tugo/TuGoReflection";
import Contact from "./pages/Contact";

// ADDITIONAL UTILITY
import { DarkModeProvider } from "./context/DarkModeProvider";
import About from "./pages/About";
import Acknowledgement from "./pages/Acknowledgement";
import ArchivesCollection from "./pages_detail/frontend_project/ArchivesCollection";

const router = createBrowserRouter([
  {
    path: "https://www.johnjang.dev/",
    element: <InitialLanding />,
    errorElement: <NotFound />,
  },
  {
    path: "/warning",
    element: <Acknowledgement />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/uxdesign",
    element: <UXDesign />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <UXDesign /> },
      { path: "/uxdesign/televuintroduction", element: <TeleVUIntroduction /> },
      { path: "/uxdesign/televuresearch", element: <TeleVUResearch /> },
      { path: "/uxdesign/televudesign", element: <TeleVUDesign /> },
      { path: "/uxdesign/televuusability", element: <TeleVUUsability /> },
      { path: "/uxdesign/televureflection", element: <TeleVUReflection /> },
      { path: "/uxdesign/tugointroduction", element: <TuGoIntroduction /> },
      { path: "/uxdesign/tugoresearch", element: <TuGoResearch /> },
      { path: "/uxdesign/tugodesign", element: <TuGoDesign /> },
      { path: "/uxdesign/tugousability", element: <TuGoUsability /> },
      { path: "/uxdesign/tugoreflection", element: <TuGoReflection /> },
    ],
  },
  {
    path: "/frontend",
    element: <FrontEnd />,
    errorElement: <NotFound />,
  },
  {
    path: "/frontend/archives",
    element: <ArchivesCollection />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </DarkModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
