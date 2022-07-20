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

          <div className="tipography">
            <div className="container-hello" data-aos="fade-up">
              <div className="gretting">
                <Typewriter
                  options={{
                    strings: [
                      "Hola mundo, yo soy",
                      "Hello world, I'm",
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
            <div className="btn-curriculum">
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
    
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  .container-main {
    overflow: hidden;
    max-height: 88vh;
  }

  .container {  
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    
  }

  .tipography {
    border: 5px solid blue; 
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
        margin:0 auto;
        background: -webkit-radial-gradient(
          circle,
          #b5b7be 10%,
          rgba(252, 70, 107, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.2rem;
        font-family: "Mochiy Pop One", sans-serif;
        margin:0 auto;
      }
      p {
        display: flex;
        justify-content: center;
      }
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
  .btn-curriculum {
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

    .container-hello {
      .info {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }

  @media (min-width: 1100px) {
    .container {
      width: 70%;     
      padding-top: 40px;
      margin:0 auto;
    }
    .container-hello {
      .info {
        h1 {
          font-size: 4.5rem;
        }
      }
    }

    .logo {
      img {
       width: 280px;
       top: -470px;
       left: 170px;
      }
    }

  }
`;

export default HomePage;
