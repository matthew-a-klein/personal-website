import React from "react";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="absolute text-center lg:text-left text-white font-mono
        w-screen flex flex-col justify-between
        bg-fixed bg-[url('./images/background.jpg')]"
    >
      <div className="mb-auto">{children}</div>
    </div>
  );
};

export default Base;
