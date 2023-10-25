import HomeComponent from "./HomeComponent";
export interface MainInterface {
  arrowClickHandler: () => void;
}
const Main = ({ arrowClickHandler }: MainInterface) => {
  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={false}>
      <div className="max-h-screen overflow-y-auto">
        <div className="text-7xl mt-16 lg:text-5xl lg:ml-32 lg:mt-48 ">
          Hello there! I'm Matthew.
        </div>
        <div className=" text-6xl mt-4 lg:mt-6 lg:text-5xl lg:ml-32">
          I'm a software developer.
        </div>
        <div className="text-4xl mt-16 lg:ml-32">
          I'm currently studying computer science at King's College, London.
        </div>
        <div className="text-4xl lg:ml-32">
          Check out my portfolio on{" "}
          <a href="https://github.com/matthew-a-klein">github</a>.
        </div>
        <div className="text-4xl mt-8 lg:ml-32">
          I am interested in web and app development, compilers and machine
          learning.
        </div>
      </div>
    </HomeComponent>
  );
};

export default Main;
