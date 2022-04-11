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
          <div>
              <button className="btn-neon bg-dark ">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                <b>Enviar</b>
              </button>
            </div>
         
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
  margin: 0 auto;

  .div-form {
    min-width: 70%;
    border: 3px dashed #ae0d23;
    margin: 10px 15px;
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

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
    }
  }

  .btn-neon {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: #fff;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s;
  }
  .btn-neon:hover {
    background: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color), 0 0 40px var(--primary-color),
      0 0 80px var(--primary-color);
    transition-delay: 1s;
  }
  .btn-neon span {
    position: absolute;
    display: block;
  }
  #span1 {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-color));
  }
  .btn-neon:hover #span1 {
    left: 100%;
    transition: 1s;
  }
  #span3 {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--primary-color));
  }
  .btn-neon:hover #span3 {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
  #span2 {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--primary-color));
  }
  .btn-neon:hover #span2 {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
  #span4 {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--primary-color));
  }
  .btn-neon:hover #span4 {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }

`;
