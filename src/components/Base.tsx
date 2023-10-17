import React from "react";
import Footer from "./Footer";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className=" absolute text-center lg:text-left text-white font-mono
        h-screen  w-screen flex flex-col justify-between
        bg-fixed  overflow-auto bg-[url('./images/background.jpg')] "
    >
      <div className="mb-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Base;
