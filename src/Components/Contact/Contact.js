import React from 'react'
import styled from "styled-components";
import emailjs from 'emailjs-com';

export const Contact = () => {
  
const sendEmail = (event) => {
  event.preventDefault();
  
  emailjs.sendForm('service_pd5l3tu','template_qd8fhge',event.target,'7P6gSedE1cFRSlXnx')
  .then(response=>console.log(response))
  .catch(error => console.log(error))
}
  return (
    <ContactStyled>
    <div className="div-form">
      <h1 className="title-form">Contact us </h1>
        <form action="" className="form-mail" onSubmit={sendEmail}>
          <label >Name</label>
          <input type="text"  name='user_name'/>
          <hr />

          <label >Email</label>
          <input type="email" name='eser_email' />
          <hr />

          <label >Mensaje</label>
          <textarea name="user_message" id="" cols="30" rows="10"></textarea>
          <hr />
          <button>Enviar</button>
        </form>
   
    </div>
  
    </ContactStyled>
  )
}
const ContactStyled = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Cookie&family=Fuzzy+Bubbles&family=Lobster&family=Pacifico&family=Redressed&family=Shadows+Into+Light&family=Vujahday+Script&display=swap');

h1 {
  color: #ff6600;
  font-size: 5rem;
  font-weight: 600;
  font-family: 'Shadows Into Light', cursive;
  margin: 0;
}

.form-mail {
  width: 20rem;
  border: groove 3px #ffff;
  border-radius:15px;
  box-shadow: -3px -2px 1px #535366;
  background: #232526;  
  background: linear-gradient(to right, #414345, #232526);  
  opacity: 0.8;  
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  width: 20rem;
}

label {
  font-size: 1.5rem;
  color: #9cc7f3;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

input {
  font-size: 1rem;
  background: transparent;
  box-shadow: 0 -2px 2px rgb(199, 194, 194);
  border-radius: 20px;
  color: #ffff;
}

textarea {
  border-radius: 10px;
  background-color: #a3a8af;
  padding: 0.5rem;
}

button {
  width: 8rem;
  border-radius: 20px;
  font-size: 1.2rem;
  color: green;
  background-color: #9df59d;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: green;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffff;
}
`;

