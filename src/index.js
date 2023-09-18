import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// CONTENT
import InitialLanding from "./pages/InitialLanding";
import NotFound from "./pages/NotFound";
import Home from "./pages/home/HomeOverview";
import DesignOverview from "./pages/ux-design/DesignOverview";
import DeveloperOverview from "./pages/front-end/DeveloperOverview";

// CONTENT DETAIL - UX DESIGN
// this is where the ux portfolio pages used to go.
// it is not included this time because it takes time to rebuild the UX portfolio
import Contact from "./pages/Contact";

// ADDITIONAL UTILITY
import { DarkModeProvider } from "./context/DarkModeProvider";
import About from "./pages/About";
import Acknowledgement from "./pages/Acknowledgement";
import ArchivesCollection from "./pages_detail/frontend_project/ArchivesCollection";

const router = createBrowserRouter([
  {
    path: "/",
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
    element: <DesignOverview />,
    errorElement: <NotFound />,
  },
  {
    path: "/frontend",
    element: <DeveloperOverview />,
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
