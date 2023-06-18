import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_gv8cvil",
        "template_jdv57qm",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
