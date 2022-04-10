import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

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
  );
}
export default Navbar;
