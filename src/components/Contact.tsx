import HomeComponent from "./HomeComponent";
export interface ExportInterface {
  arrowClickHandler: () => void;
}
const Contact = ({ arrowClickHandler }: ExportInterface) => {
  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={true}>
      Contact
    </HomeComponent>
  );
};

export default Contact;
