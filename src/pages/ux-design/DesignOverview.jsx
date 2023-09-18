import React, { useEffect, useState } from "react";
import DesktopSize from "./overview-desktop/DesktopSize";
import TabletSize from "./overview-tablet/TabletSize";
import MobileSize from "./overview-mobile/MobileSize";

export default function DesignOverview() {
  const [isDesktopDesign, setIsDesktopDesign] = useState(true);
  const [isTabletDesign, setIsTabletDesign] = useState(false);
  const [isMobileDesign, setIsMobileDesign] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1200) {
        setIsDesktopDesign(true);
      } else {
        setIsDesktopDesign(false);
      }

      if (window.innerWidth <= 1200 && window.innerWidth > 700) {
        setIsTabletDesign(true);
      } else {
        setIsTabletDesign(false);
      }

      if (window.innerWidth <= 700) {
        setIsMobileDesign(true);
      } else {
        setIsMobileDesign(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktopDesign && <DesktopSize />}
      {isTabletDesign && <TabletSize />}
      {isMobileDesign && <MobileSize />}
    </>
  );
}
