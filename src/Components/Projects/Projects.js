import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Imagecomerce from "../../img/react-ecomerce.png"
/* import "./projects.css" */

function Projects() {
  return (
    < ProjectsPageStyled>

      <div class="container-main-cards">
        <div className="card">
          <img src={Imagecomerce} alt="" />
          <div className="content">
            <h2>Ecomerce</h2>        
            <Link to="#">Github</Link>
            <Link to="#">Deploy</Link>            
          </div>
        </div>
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
    z-index: 101;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
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

`;

export default Projects;
