import axios from "axios";

const submitForm = (fromEmail: String, fromName: String, message: String, captchaToken: String) => {
  axios
    .post("/api/email/", {
      from_email: fromEmail,
      from_name: fromName,
      message: message,
      token: captchaToken
    })

    .then(
      (result) => {
        console.log(result.data);
      },
      (error) => { error(error)}
    );
};

export default submitForm;
