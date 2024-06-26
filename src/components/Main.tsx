import HomeComponent from "./HomeComponent";

export interface MainInterface {
  arrowClickHandler: () => void;
}
const Main = ({ arrowClickHandler }: MainInterface) => {
  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={false}>
      <div>
        <div className="text-3xl mt-16 lg:text-5xl lg:ml-32 lg:mt-48 ">
          Hello there! I'm Matthew.
        </div>
        <div className=" text-3xl mt-4 lg:mt-6 lg:text-5xl lg:ml-32">
          I'm a software developer.
        </div>
        <div className="text-xl mt-16 lg:ml-32">
          I'm currently studying computer science at King's College, London.
        </div>
        <div className="text-xl  lg:ml-32">
          I'll be interning at {" "}<a
            className="underline underline-offset-4"
            href="https://nethermind.io"
            target="_blank" 
          >Nethermind</a>{" "}over summer 2024.
        </div>
        <div className="text-xl mt-16 lg:ml-32">
          Check out my portfolio on{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/matthew-a-klein"
            target="_blank" 
          >
            github
          </a>
          .
        </div>
        <div className="text-xl mt-8 lg:ml-32">
          I am interested in cryptography, compilers and machine
          learning.
        </div>
        <div className="text-xl lg:ml-32">
          Click{" "}
          <a
            className="underline underline-offset-4"
            href="/resume"
            target="_blank" 
          >
            here
          </a>
          {" "}for my resume.
        </div>
      </div>
    </HomeComponent>
  );
};

export default Main;
