import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
 <NavbarPageStyled>
    <nav className="nav">
      <h5>
        <span className='span'>Laura</span> Web Developer
      </h5>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to="/" activeclassname=" " className="nav__link">
            Inicio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/AboutMe" activeclassname=" " className="nav__link">
            Acerca de mí
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/projects"
            activeclassname="active-class links"
            className="nav__link"
          >
            Proyectos
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            activeclassname="active-class links"
            className="nav__link"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    </NavbarPageStyled>
  );
}

const NavbarPageStyled = styled.nav`
*,

*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
} 

.nav {
  position: relative;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 15vh;
 /*  background: rgb(20, 19, 19); */
}

li {
  list-style: none;
}
a {
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
}
a:hover{
  color:aliceblue;
  text-shadow: 0 0 5px rgb(226, 113, 7),  0 0 15px rgb(226, 113, 7),  0 0 30px rgb(226, 113, 7), 0 0 5px rgb(226, 113, 7);
 padding: 2px;
}

.active{
  text-shadow: 0 0 5px rgb(226, 113, 7),  0 0 15px rgb(226, 113, 7),  0 0 30px rgb(226, 113, 7), 0 0 5px rgb(226, 113, 7);
}

  .span{
    font-size: 1.5rem;
    font-family: "Mochiy Pop One", sans-serif;
   text-shadow: 0 0 5px var(--primary-color),  0 0 15px var(--primary-color),  0 0 30px var(--primary-color), 0 0 5px var(--primary-color);
  }
  
.nav__brand {
  text-transform: uppercase;
}

.nav__menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
}
.nav__toggler {
  display: none;
}
.nav__toggler div {
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: rgb(204, 204, 204);
  transition: 0.3s ease-in;
}

@media screen and (max-width: 815px) {
  .nav__toggler {
    display: block;
    cursor: pointer;
  }
  .nav__menu {
    position: fixed;
    top: 0.1vh;
    right: 0;
    height: 100%;
    width: 100vw;
    background: rgb(20, 19, 19);
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.5s ease-in;
    padding-top: 30%;
    
  }
}
/* Active Class */
.nav__active {
  transform: translateX(0%);
}
/* Toggle Icon Animation */

.toggle .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}

`;
export default Navbar;
