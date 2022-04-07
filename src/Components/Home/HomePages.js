import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons//LinkedIn";
import { Link } from "react-router-dom";
import "../Navigation/nav.css"
function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hola, soy <span>Laura Vargas</span>
        </h1>
        <br />
        <p>
          Desarrolladora web full stack, apasionada por explorar nuevas
          tecnologías y desarrollar soluciones de software
        </p>
        <div className="icons  i-facebook">
          <Link to="#" className="icon i-facebook">
            <FacebookIcon />
          </Link>
          <Link to="#" className="icon i-github">
            <GithubIcon />
          </Link>
          <Link
            to="https://www.linkedin.com/in/daniela-vargas-hidalgo/"
            className="icon i-LinkedIn"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  height: 100vh;
  position: relative;

  .particle-con {
    position: relative;
    z-index: -1;
  }

  .typography {
    position: relative;
    z-index: 101;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    h1 {
      font-size: 1.8rem;
      color: #e9e6e6;

      span {
        font-size: 2.3rem;
        color: #ffffff;
      }
    }

    p {
      color: #e9e6e6;
      line-height: 40px;
      font-weight: bold;
      font-size: 1.5rem;
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
  }
`;

export default HomePage;
