import React,{ useState } from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@material-ui/icons/Language';


import ProjectsData from "../../Data/Data";




function Projects() {
  const[items, setItems] = useState(ProjectsData );
  return (    
    < ProjectsPageStyled>
                  <div class="container-main-cards">
                       {
              items.map((elem) => {
                const {id,title,image,git,deploy}=elem;

                return(
          
                <div className="card">                
                  <img src={image} alt="" />
                  <div className="content">
                    <div className="content">
                      <h2>{title}</h2>
                      <div className="icons">
                      <a  href={git} target="_blank" className="icon i-github"><GithubIcon /></a>                      
                      <a  href={deploy} target="_blank" className="icon i-deploy"><LanguageIcon/></a>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
            }
              </div>
           

    </  ProjectsPageStyled>
  );
}
const ProjectsPageStyled = styled.header`
/*   height: 100vh;
  position: relative; */
  margin: 0;
   padding: 0;
   box-sizing: border-box;

 
  .container-main-cards{
    position: relative;
    z-index: 100;
   display: flex;
   flex-wrap: wrap;
  margin-top:5%;
   justify-content: center;
   min-height: 100vh;
}


.card{
   margin: 20px;
   width: 300px;
   height: 200px;
   border-radius: 5px;   
   background-size: 300px 200px;
   box-shadow: 3px 5px 5px rgba(3,32,51,.8);
   margin-top: 55px;
}

.card img {
   width: 300px;
   height: 200px;
   position: absolute;
}
.content{
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   justify-content: center;
   background: rgba(0,0,0,.6);
   opacity: 0;
   transition: 1s; 
}

.content h2, a{
   color: rgba(255,255,255,.8);
   text-decoration: none;
   margin: 10px 0;
   font-family: sans-serif;
}

.content a{
   font-weight: 200;
}

.card:hover .content{
   opacity: 1;
}

.icons{
.icon {
        border: 2px solid var(--border-color);
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

      .i-deploy {
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
    
  


`;

export default Projects;
