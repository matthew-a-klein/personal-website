import HomeComponent from "./HomeComponent";
export interface AboutInterface {
  arrowClickHandler: () => void;
}
const About = ({ arrowClickHandler }: AboutInterface) => {
  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={false}>
      About
    </HomeComponent>
  );
};

export default About;
