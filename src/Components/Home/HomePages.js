import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons//LinkedIn";
import { Link } from "react-router-dom";
import Cv from "../../assets/Laura Daniela Vargas Hidalgo.pdf";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <HomePageStyled>
      <div className="container-main">
        <div className="container">
          {/*     <div className="photo">
            <img src="https://i.pinimg.com/originals/32/40/b1/3240b18af92b6beb0b8056b993aa47d5.gif" alt="" />
          </div> */}

          <div className="tipography">
            <div className="container-hello" data-aos="fade-up">
              <div className="gretting">
                <Typewriter
                  options={{
                    strings: [
                      "Hola mundo, yo soy",
                      "Helo world, I'm",
                      "Bonjour le monde, je suis",
                      "Olá mundo, eu sou",
                      "Hallo Welt, ich bin",
                      "Hei verden, jeg er",
                      "Ciao mondo, io sono",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <span className="grettingHand"> 👋🏼 </span>
              </div>
              <div className="info">
                <h1>Laura Vargas</h1>
                <p>Desarrolladora Full Stack 🖥️</p>
              </div>
            </div>
            <div className="icons  i-facebook">
              <Link to="#" className="icon i-facebook">
                <FacebookIcon />
              </Link>
              <a
                href="https://github.com/LDvargasHidalgo"
                className="icon i-github"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/daniela-vargas-hidalgo/"
                className="icon i-LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
            <br />
            <div  className="btn-curriculum" >
              <a href={Cv} download={"downloadCv"} className="btn-neon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                <b>Descargar CV</b>
              </a>
            </div>
          </div>
        </div>
        <div className="logo">
          {/* https://cdn.pixabay.com/photo/2016/03/31/23/36/books-1297707_960_720.png */}
          <img
            src="https://cdn.pixabay.com/photo/2016/06/13/11/46/office-1454087_960_720.png"
            width="200px"
            alt=""
          />
        </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  .container-main {
    /* border: 5px solid yellow; */
    overflow: hidden;
    max-height: 88vh;
  }

  .container {
    /*  border: 5px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tipography {
    /*     border: 5px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .gretting {
    display: flex;
    justify-content: center;
  }
  .container-hello {
    .info {
      h1 {
        padding: 1rem 0;
        color: var(--primary-color);
        font-size: 2rem;
        font-family: "Mochiy Pop One", sans-serif;
      }
      p{
        display: flex;
        justify-content: center;
      }
    }
  }

  .logo {
    display: flex;
    img {
      margin: 0 auto;
    }
  }

  /* Redes sociales */
  .icons {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    position: relative;

    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      svg {
        margin: 0.5rem;
      }
    }

    .i-facebook {
      &:hover {
        border: 2px solid #0c7a9b;
        color: #0c7a9b;
      }
    }

    .i-LinkedIn {
      &:hover {
        border: 2px solid #0c7a9b;
        color: #0c7a9b;
      }
    }

    .i-github {
      &:hover {
        border: 2px solid #5f4687;
        color: #5f4687;
      }
    }
  }

  /* btn download curriculum */
  .btn-curriculum{
    padding: 15px;
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

  .gretting {
    font-size: 2.4rem;
    display: flex;
  }
  .grettingHand {
    animation: wave 2.1s 0.6s infinite;
    transform-origin: 75% 75%;
    display: inline-block;
    margin: 0 0.5rem;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(16deg);
    }
    20% {
      transform: rotate(-6deg);
    }
    30% {
      transform: rotate(16deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(16deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  /* Cuando la pantalla sea mas grande de 785 */
  @media (min-width: 785px) {
    .container {
      margin: 30px 0px 0px 100px;
     
    }
    .logo {
    position: absolute;
    img {
      position: relative;
      top: -350px;
      left: 50px;
    }
  }



  }


 /*  .logo {   
    position: absolute;
    img {
      position: relative;
      top: -210px;
      left:50px ;
    }
  } */

  /*    .home {
  display: flex;
  justify-content: space-between;
  margin: 7rem auto 0 auto;
  max-width: 1200px;
  padding: 0 5rem;
} 
.container {
  margin-top: 10rem;
}
.gretting {
  font-size: 2.4rem;
  display: flex;
}
.grettingHand {
  animation: wave 2.1s 0.6s infinite;
  transform-origin: 75% 75%;
  display: inline-block;
  margin: 0 0.5rem;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(16deg);
  }
  20% {
    transform: rotate(-6deg);
  }
  30% {
    transform: rotate(16deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(16deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.info {
  margin: 1.2rem 0 3rem 0;
}
.info h1 {
  font-size: 7rem;
  background: linear-gradient(
    90.06deg,
    rgba(230, 26, 122, 0.92) -11.91%,
    #f85959 59.48%
  );
  background-size: 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info p {
  font-size: 2rem;
}

.characterContainer {
  position: relative;
}
.blob,
.character,
.blobBlur,
.characterBlur {
  position: absolute;
  top: 0;
  right: 0;
  width: 35rem;
}
.characterBlur,
.character {
  top: 6rem;
}
.container{
  img{
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: start;
    align-items: flex-start;
  }
}
.blobBlur {
  filter: blur(70px);
}
.characterBlur {
  filter: blur(30px);
}
.btnsContainer {
  display: flex;
}
.btnsContainer a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 3.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: none;
}
.btnContact {
  border: none;
  background: linear-gradient(90.06deg, #e61a7aeb -11.91%, #f85959 99.48%);
  color: var(--text);
  margin-right: 1.6rem;
  transition: 200ms;
}
.btnContact:hover {
  box-shadow: 0 0 10px #f4545c;
}
.btnCv {
  background: none;
  border: 1px solid var(--main);
  color: var(--main);
  transition: 200ms.btnCv {
  background: none;
  border: 1px solid var(--main);
  color: var(--main);
  transition: 200ms;
}
.btnCv:hover {
  background: #f85959;
  color: var(--text);
  border: none;
}
  background: #f85959;
  color: var(--text);
  border: none;
}
@media (max-width: 900px) {
  .home {
    flex-direction: column;
    align-items: center;
  }
  .blob,
  .character,
  .blobBlur,
  .characterBlur {
    right: calc(50% - 35rem / 2);
    margin: 0 auto;
  }









     .character,
  .characterBlur {
    right: calc(50% - 35rem / 2);
    margin: 0 auto;
  }
  .blob,
  .blobBlur {
    right: calc(50% - 50rem / 2);
    margin: 0 auto;
  } */
  /*   .characterContainer {
    margin-bottom: 30rem;
  }
}
@media (max-width: 500px) {
  .home {
    padding: 0 2rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info {
    text-align: center;
  }
  .btnsContainer {
    display: flex;
    flex-direction: column;
  }
  .btnContact {
    margin-bottom: 2rem;
  }
}
   .container-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .tipography {
    text-align: center;
    padding: 3px 20px;

    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.3rem;
      font-weight: 900;
    }
    span {
      font-size: 1.8rem;
      font-family: "Shadows Into Light", cursive;
      color: white;
    }
  }

  .photo {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      
      position: relative;
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      svg {
        margin: 0.5rem;
      }
    }

    .i-facebook {
      &:hover {
        border: 2px solid #0c7a9b;
        color: #0c7a9b;
      }
    }

    .i-LinkedIn {
      &:hover {
        border: 2px solid #0c7a9b;
        color: #0c7a9b;
      }
    }

    .i-github {
      &:hover {
        border: 2px solid #5f4687;
        color: #5f4687;
      }
    }
  }
 */
  //prueba botn
  /* .btn-neon {
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

  @media (min-width: 600px) {
    .container {
      margin-top: 0;
    }

    .photo {
      width: 300px;
      height: 300px;
    }
  }

  @media (min-width: 992px) {
    .container {
      margin-top: 5%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
    }

    .photo {
      min-width: 400px;
      height: auto;
      padding: 3%;
    }

    .tipography {
      p {
        font-size: 1.2rem;
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 900;
      }
      span {
        font-size: 2rem;
        font-family: "Shadows Into Light", cursive;
        color: white;
      }
    }
  } */
`;

export default HomePage;
