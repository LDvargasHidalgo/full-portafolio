import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import foto from "../../img/foto.jpg";
/* import "navigation.css" */

function Navigation() {
  return (
    <NavigationStyled>
      <div className="photo">
        <img src={foto} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/"> Inicio </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeclassname="active-class" >
            Proyectos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active-class" >
            Contacto
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .photo {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2px 0;
    margin-top: -30px;
    margin-bottom: 30px;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    li {
      display: block;
      a {
        display: block;
        padding: 2rem 5rem;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        /*slip effector when hovering over any item in the list */
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  p {
    padding: 1.3rem 0;
    font-size: 1.1rem;
    display: block;
    text-align: center;
  }

  .active {
    text-shadow: red 0.1em 0.1em 0.2em;
    padding-left: 20px;
  }
`;
export default Navigation;
