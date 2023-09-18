import React, { useState, useEffect } from "react";
import DesktopHome from "./desktop/DesktopHome";
import TabletHome from "./tablet/TabletHome";
import MobileHome from "./mobile/MobileHome";

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
    <div>
      {isDesktopHome && <DesktopHome />}
      {isTabletHome && <TabletHome />}
      {isMobileHome && <MobileHome />}
    </div>
  );
}
