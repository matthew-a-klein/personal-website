import React from "react";
import ProfilePicture from "./images/profile_picture.jpg";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[url('./images/background.jpg')] absolute text-white font-mono text-3xl">
      <div className="flex">
        <div>
          <div className=" ">Hello there! I'm Alex!</div>
          <div>I'm a software developer</div>
          <div>
            I'm currently a student at computer science at King's College,
            London.
          </div>
          <div>Check out my portfolio on github.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
