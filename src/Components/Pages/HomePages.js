import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons//LinkedIn';


function HomePage() {
    return (
        <HomePageStyled>
          
            <div className="typography">
                <h1>Hola,  soy  <span>Laura Vargas</span></h1>
                <br />
                <p>
                    Desarrolladora web full stack, apasionada por explorar nuevas tecnologías y desarrollar soluciones de software 
                </p>
                <div className="icons">
                    <a href="#" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="#" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/daniela-vargas-hidalgo/" className="icon i-LinkedIn">
                        <LinkedInIcon />
                    </a>
                    
              
                </div>
            </div>
           
        </HomePageStyled>

    )
}

const HomePageStyled = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Happy+Monkey&display=swap');
    width: 100%;
    height: 100vh;
    position: relative;

    .particle-con{
       position: relative;
       z-index: -1;
    }
   
    .typography{
        position: relative;
        z-index: 101;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

            h1{
                font-size: 1.8rem;
                color: #e9e6e6;

                span{
                    font-size: 2.3rem;
                    font-family: 'Berkshire Swash', cursive;
                    color: #ffffff;
                }
            }

            p{
                color: #e9e6e6;
                line-height: 40px;
                font-weight: bold;
                font-size: 1.5rem;
            }
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 3rem;
            
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid blue;
                    color: #1059c5;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-LinkedIn{
                &:hover{
                    border: 2px solid skyblue;
                    color: skyblue;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
             
            }
        }
    }
`;

export default HomePage;