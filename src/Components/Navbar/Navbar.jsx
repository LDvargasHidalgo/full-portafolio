import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navbar = () => {
  /* toggle menu */
  const [toggle, setToggle] = useState(false);
  return (
    <NavbarPageStyled>
      <nav className="app__navbar">
        <div className="nav_name">
          <h5>
            <span className="span">Laura</span> Web Developer
          </h5>
        </div>

        <ul className="app__navbar-links">
          <li className="nav__item">
            <NavLink to="/" activeclassname=" " className="nav__link">
              Inicio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/About" activeclassname=" " className="nav__link">
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
              activeclassname="active links"
              className="nav__link"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        {/* Toggle Menu */}
        <div className="app__navbar-menu">
          <HiOutlineMenuAlt3 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [1, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />

              <ul>
                <li className="nav__item">
                  <NavLink
                    to="/"
                    activeclassname=" "
                    className="nav__link  onClick={() => setToggle(false)}"
                    onClick={() => setToggle(false)}
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav__item" onClick={() => setToggle(false)}>
                  <NavLink
                    to="/About"
                    activeclassname=" "
                    className="nav__link"                    
                  >
                    Acerca de mí
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/projects"
                    activeclassname="active-class links"
                    className="nav__link"
                    onClick={() => setToggle(false)}
                  >
                    Proyectos
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/contact"
                    activeclassname="active links"
                    className="nav__link"
                    onClick={() => setToggle(false)}
                  >
                    Contacto
                  </NavLink>
                </li>             
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </NavbarPageStyled>
  );
};

const NavbarPageStyled = styled.nav`
  .logo {
    font-size: 1rem;
    text-transform: uppercase;

  
    .active {
      text-shadow: 0 0 5px rgb(226, 113, 7), 0 0 15px rgb(226, 113, 7),
        0 0 30px rgb(226, 113, 7), 0 0 5px rgb(226, 113, 7);
    }
  }

  .span {
    font-size: 1.5rem;
    font-family: "Mochiy Pop One", sans-serif;
    text-shadow: 0 0 5px var(--primary-color), 0 0 15px var(--primary-color),
      0 0 30px var(--primary-color), 0 0 5px var(--primary-color);
  }

  .app__navbar {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    //background: rgb(0, 0, 0);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(4px);
    position: relative;
    z-index: 150;
  }

  .app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 10rem;
      /* height: 3rem; */

      @media screen and (min-width: 2000px) {
        width: 20rem;
      }
    }
  }

  .app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin: 0 1rem;
      cursor: pointer;
      font-family: "Mochiy Pop One", sans-serif;

      flex-direction: column;

      div {
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;

        margin-bottom: 5px;
      }

      a {
        color: var(--white-color);
        text-decoration: none;
        flex-direction: column;

       
        font-weight: 500;

        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }
      }

      &:hover {
        div {
          background: var(--secondary-color);
        }
      }
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .app__navbar-menu {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--secondary-color);

    svg {
      width: 70%;
      height: 70%;
      color: var(--white-color);
    }

    div {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 5;

      padding: 1rem;

      width: 100%;
      height: 100vh;
      border-radius: 15px 0 0 15px;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      background-color: black;

      svg {
        width: 35px;
        height: 35px;
        color: var(--secondary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        li {
          margin: 1rem;

          a {
            color: var(--white-color);
            text-decoration: none;
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 500;

            transition: all 0.3s ease-in-out;

            &:hover {
              color: var(--secondary-color);
            }
          }
        }
      }

      @media screen and (min-width: 900px) {
        display: none;

        h5{
          font-size:5rem;
        }
      }
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  }

  .active {
    text-shadow: 0 0 5px rgb(226, 113, 7), 0 0 15px rgb(226, 113, 7),
      0 0 30px rgb(226, 113, 7), 0 0 5px rgb(226, 113, 7);
  }
`;
export default Navbar;
