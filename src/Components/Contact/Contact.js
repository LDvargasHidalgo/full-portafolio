import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

export const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_pd5l3tu",
        "template_qd8fhge",
        event.target,
        "7P6gSedE1cFRSlXnx"
      )
      .then((response) => alert("Tu mensaje ha sido enviado correctamente"))
      .catch((error) => console.log(error));
  };
  return (
    <ContactStyled>
      <div className="div-form">
        <h4 className="title-form">Contáctame</h4>
        <form action="" className="form-mail" onSubmit={sendEmail}>
      <div className="section-form">
          <label>Nombre</label>
          <input type="text" name="user_name" />
          </div>
          <div className="section-form">
          <label>Correo</label>
          <input type="email" name="eser_email" />
          </div>       
          <div className="section-form">
          <label>Mensaje</label>
          <textarea name="user_message" id="" cols="20" rows="2"></textarea>
          </div>
          <hr />
          <button>Enviar</button>
        </form>
      </div>
    </ContactStyled>
  );
};
const ContactStyled = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Acme&family=Cookie&family=Fuzzy+Bubbles&family=Lobster&family=Pacifico&family=Redressed&family=Shadows+Into+Light&family=Vujahday+Script&display=swap");
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  

.div-form {
  min-width:70%;
  border:3px dashed   #ae0d23;
  margin: 10px  15px;
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: center;
  text-align: center;
  padding: 3%;
  border-radius: 2%;
}

.section-form {
  display: flex;
  flex-direction: column;
 align-items: start;
 padding: 10px;

 input{
   width: 100%;
   
 }

 textarea {
  width: 100%;
 }
}

`;
