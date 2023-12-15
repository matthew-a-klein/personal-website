import HomeComponent from "./HomeComponent";
export interface AboutInterface {
  arrowClickHandler: () => void;
}
const About = ({ arrowClickHandler }: AboutInterface) => {
  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={false}>
      <div className="text-2xl font-bold mt-16 lg:text-5xl lg:ml-32 lg:mt-48 ">
        About me
      </div>
      <div className="mx-5 text-xl mt-16 lg:ml-32">
        {" "}
        My name is Matthew Alexander Klein, I am a software engineer, currently
        studying for a Bsc in Computer Science at King's College, London.
      </div>
      <div className="mx-5 text-xl mt-16 lg:ml-32">
        I grew up in London and spent four years in Yeshivot in Israel.
      </div>
      <div className="mx-5 text-xl mt-4 lg:ml-32">I sometimes give talks on Halachah and halachic history. Here's a{' '}
      <a
            className="underline underline-offset-4"
            href="https://www.sefaria.org/profile/matthew-alexander-klein"
            target="_blank"
          >
            link
          </a>
         {' '}to my source sheets.</div>
      <div className=" mx-5 text-xl mt-16 lg:ml-32">
        {" "}
        I have experience in full-stack web and app development, compilers, and
        artificial intelligence.
      </div>
    </HomeComponent>
  );
};

export default About;
