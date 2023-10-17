const Home = () => {
  return (
    <div className="h-screen w-screen bg-[url('./images/background.jpg')] absolute text-white font-mono">
      <div className="text-center lg:text-left">
        <div className="text-3xl mt-16 lg:text-5xl lg:ml-32 lg:mt-48 ">
          Hello there! I'm Matthew!
        </div>
        <div className=" text-3xl mt-2 lg:mt-6 lg:text-5xl lg:ml-32">
          I'm a software developer
        </div>
        <div className="text-xl mt-16 lg:ml-32">
          I'm currently a studying computer science at King's College, London.
        </div>
        <div className="text-xl lg:ml-32">
          Check out my portfolio on{" "}
          <a href="https://github.com/matthew-a-klein">github</a>.
        </div>
        <div className="text-xl mt-8 lg:ml-32">
          I am interested in web and development, compilers and machine
          learning.
        </div>
      </div>
    </div>
  );
};

export default Home;
