import { useState } from "react";
import ContactForm from "./ContactForm";
import HomeComponent from "./HomeComponent";
import { LegacyRef, createRef } from 'react'
import Recaptcha from "./Recaptcha";
import ReCAPTCHA from "react-google-recaptcha";
import submitForm from "../api_requests/submitForm";


export interface ExportInterface {
  arrowClickHandler: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}
const Contact = ({ arrowClickHandler }: ExportInterface) => {

  const [captcha, setCaptcha] = useState(false)
  const [gCaptchaResponse, setGCaptchaResponse] = useState("")
  const [verified, setVerified] = useState(false)
  const recaptchaRef :LegacyRef<ReCAPTCHA> = createRef()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });


  const handleCaptchaSuccess = (token: string| null)=>{
      setCaptcha(true)
      setGCaptchaResponse(token!)
      setVerified(true)
  }

  const resetCaptcha= ()=>{
    setCaptcha(false)
      setGCaptchaResponse("token")
      setVerified(false)
      recaptchaRef.current!.reset()
  }

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = () => {
    if(captcha){
      clearForm();
      submitForm(formData.email, formData.name, formData.message, gCaptchaResponse);
      resetCaptcha()
    }
  };

  return (
    <HomeComponent arrowClickHandler={arrowClickHandler} isLastScreen={true}>
      <div className="mt-8 text-3xl font-semibold flex justify-center">
        Contact Me!
      </div>
      <ContactForm  verified={verified} handleSubmit={handleSubmit}formData={formData} setFormData={setFormData}/>
      <Recaptcha handleExpiration={resetCaptcha} handleCaptcha={handleCaptchaSuccess} recaptchaRef={recaptchaRef}/>
    </HomeComponent>
  );
};

export default Contact;
