import React, { useState } from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import ProjectsData from "../../Data/Data";

function Projects() {
  const [items] = useState(ProjectsData);
  return (
    <ProjectsPageStyled>
      <div className="container-main-cards">
        {items.map((elem) => {
          const { id, title, image, git, deploy } = elem;

          return (
            <div className="card" key={id}>
              <img src={image} alt="" />
              <div className="content">
                <div className="content">
                  <h2>{title}</h2>
                  <div className="icons">
                    <a href={git} target="_blank" className="icon i-github">
                      <GithubIcon />
                    </a>
                    <a href={deploy} target="_blank" className="icon i-deploy">
                      <LanguageIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ProjectsPageStyled>
  );
}
const ProjectsPageStyled = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Berkshire Swash", cursive;

  .container-main-cards {
    position: relative;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    /* margin: 20px; */
    width: 330px;
    height: 200px;
    border-radius: 2px;
    margin: 10px;
    background-color: black;
  }

  .card img {
    width: 330px;
    height: 200px;
    position: absolute;
    border-radius: 2%;
  }
  .content {
    position: relative;
    width: 330px;
    height: 200px;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: 1s;
  }

  .content h2,
  a {
    /*   color: rgba(255, 255, 255, 0.8); */
    text-decoration: none;
    margin: 10px 0;
    font-family: "Mochiy Pop One", sans-serif;
  }

  .content a {
    font-weight: 300;
  }

  .card:hover .content {
    opacity: 2;
  }

  .icons {
    .icon {
      transition: all 0.4s ease-in-out;
      height: auto;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      svg {
        margin: 0.2rem;
      }
    }

    .i-deploy {
      &:hover {
        color: #0c7a9b;
      }
    }

    .i-github {
      &:hover {
        color: #5f4687;
      }
    }
  }

  @media (min-width: 785px) {
    .card {
      width: 330px;
      height: 200px;
     
    }

    .card img {
      width: 330px;
      height: 200px;
      
    }
    .content {
      width: 330px;
      height: 200px;
    }
  }

  @media (min-width: 1100px) {
    .card {
      width: 530px;
      height: 300px;     
    }

    .card img {
      width: 530px;
      height: 300px;     
      
    }
    .content {
      width: 530px;
      height: 300px;     
    }

  }

`;

export default Projects;
