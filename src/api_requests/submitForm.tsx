import axios from "axios";

const submitForm = (fromEmail: String, fromName: String, message: String) => {
  axios
    .post("http://localhost:8000/api/email/", {
      from_email: fromEmail,
      from_name: fromName,
      message: message,
    })

    .then(
      (result) => {
        console.log(result.data);
      },
      (error) => {}
    );
};

export default submitForm;
