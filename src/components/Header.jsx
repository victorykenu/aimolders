import React from "react";
import MobileAppBox from "./MobileAppBox";
import TopBar from "./TopBar";
import HeaderMain from "./HeaderMain";

export default function Header() {
  return (
    <div
      className="icm-navbar affix-top"
      data-spy="affix"
      data-offset-top="100"
    >
      <MobileAppBox />
      <TopBar />
      <HeaderMain />
    </div>
  );
}
