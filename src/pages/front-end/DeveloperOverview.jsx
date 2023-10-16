import React, { useEffect, useState } from "react";
import DesktopSize from "./overview-desktop";
import TabletSize from "./overview-tablet";
import MobileSize from "./overview-mobile";

export default function DeveloperOverview() {
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
    <div className="text-[var(--color-text)]">
      {isDesktopDesign && <DesktopSize />}
      {isTabletDesign && <TabletSize />}
      {isMobileDesign && <MobileSize />}
    </div>
  );
}
