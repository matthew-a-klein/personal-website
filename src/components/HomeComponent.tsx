import React, { ReactNode } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export interface HomeComponentInterface {
  children: ReactNode;
  arrowClickHandler: () => void;
  isLastScreen: Boolean;
}

const HomeComponent = ({
  children,
  arrowClickHandler,
  isLastScreen,
}: HomeComponentInterface) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="max-h-screen overflow-y-auto">{children}</div>
      <div className={`flex justify-center ${isLastScreen && "hidden"} mb-8`}>
        <AiOutlineArrowDown size={48} onClick={arrowClickHandler} />
      </div>
    </div>
  );
};

export default HomeComponent;
