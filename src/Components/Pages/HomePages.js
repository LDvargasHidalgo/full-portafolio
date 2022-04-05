import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons//LinkedIn';
import Particle from '../Particles';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
            <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Laura Vargas</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque nihil voluptates ea dolore vel 
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
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
    width: 100%;
    height: 100vh;
    position: relative;

    .particle-con{
       position: relative;
       z-index: -1;
    }
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
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
                    color: blue;
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