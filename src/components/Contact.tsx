import ContactForm from "./ContactForm";
import HomeComponent from "./HomeComponent";
export interface ExportInterface {
  arrowClickHandler: () => void;
}
const Contact = ({ arrowClickHandler }: ExportInterface) => {
  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={true}>
      <div className="mt-8 text-3xl font-semibold flex justify-center">
        Contact Me!
      </div>
      <ContactForm />
    </HomeComponent>
  );
};

export default Contact;
