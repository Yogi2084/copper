import FooterBar from "@/components/footer-bar/footerBar";
import NavigationBar from "@/components/navigation-bar/navigationBar";
import React from "react";

const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <div className="h-48 bg-orange-500" />
      <div className="h-48 bg-purple-500" />
      <div className="h-28 bg-green-500" />
      <FooterBar />

    </div>
  );
};

export default RootPage;