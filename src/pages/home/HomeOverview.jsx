import React, { useState, useEffect } from "react";
import DesktopHome from "./desktop";
import TabletHome from "./tablet";
import MobileHome from "./mobile";

export default function HomeOverview() {
  const [isDesktopHome, setIsDesktopHome] = useState(true);
  const [isTabletHome, setIsTabletHome] = useState(false);
  const [isMobileHome, setIsMobileHome] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1200) {
        setIsDesktopHome(true);
      } else {
        setIsDesktopHome(false);
      }

      if (window.innerWidth <= 1200 && window.innerWidth > 700) {
        setIsTabletHome(true);
      } else {
        setIsTabletHome(false);
      }

      if (window.innerWidth <= 700) {
        setIsMobileHome(true);
      } else {
        setIsMobileHome(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-[var(--color-text)] bg-[var(--color-bg-dark)] -mx-8 px-8 -my-8 py-8">
      {isDesktopHome && <DesktopHome />}
      {isTabletHome && <TabletHome />}
      {isMobileHome && <MobileHome />}
    </div>
  );
}
