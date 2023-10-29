import React from "react";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="text-center lg:text-left text-white font-mono
         overflow-x-hidden w
         bg-fixed bg-center bg-c bg-[url('./images/background.jpg')]"
    >
      <div className="mb-auto">{children}</div>
    </div>
  );
};

export default Base;
