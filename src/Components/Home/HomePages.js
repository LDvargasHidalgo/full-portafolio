import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons//LinkedIn";
import { Link } from "react-router-dom";
import Photo from "../../img/foto.jpg";
import Cv from "../../assets/Laura Daniela Vargas Hidalgo.pdf";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="container-main">
        <div className="container">
          <div className="photo">
            <img src={Photo} alt="" />
          </div>
          <div className="tipography">
            <h1>
              Hola, soy <span>Laura Vargas </span>
            </h1>
            <p>
              Desarrolladora frontend, e trabajado en proyectos con tecnologías
              enfocadas al desarrollo web, como lo son HTML, CSS, Bootstrap,
              JavaScript y React. <br />
              Tengo gran capacidad de trabajo en equipo, adaptación a las nuevas
              tecnologías en entorno de aprendizaje acelerado y una excelente
              habilidad de resolución de problemas.
            </p>
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
            <div>
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
  @import url("https://fonts.googleapis.com/css2?family=Acme&family=Cookie&family=Fuzzy+Bubbles&family=Lobster&family=Pacifico&family=Redressed&family=Shadows+Into+Light&family=Vujahday+Script&display=swap");

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
      color: var(--primary-color);
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
      border-radius: 50%;
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
        color: #0c2e9b;
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

  //prueba botn
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
        color: var(--primary-color);
      }
    }
  }
`;

export default HomePage;
