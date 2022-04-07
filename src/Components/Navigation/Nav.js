import React from 'react';
import Sidebar from './Sidebar';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
/* import "./nav.css" */

function Navigation() {
  return (
	<NavStyled>
    <div className='nav' >
       	<header className="header">
		<div className="container">
		<div className="btn-menu">
			<label htmlFor="btn-menu">☰</label>
		</div>
			{/* <div className="logo">
				<h1>Desarrolladora Full Stack</h1>
			</div> */}
			<nav className="menu">
				<NavLink to="/" activeclassname="active-class" >Inicio</NavLink>
				<NavLink to="/projects" activeclassname="active-class" >Proyectos</NavLink>
				<NavLink to="/contact" activeclassname="active-class">Contacto</NavLink>
			</nav>
		</div>
	</header>
	<div className="capa"></div>
	<input type="checkbox"  id="btn-menu"/>
	<div className="container-menu">
	<div className="cont-menu">
		<div>
		<Sidebar/>
		</div>
		<div className="bt-menu">
		<label htmlFor="btn-menu" className='btn-menu'>
		<h2>X</h2>
		</label>
		</div>
	</div>
</div>
    </div>
	 </NavStyled>
  )
}
const NavStyled = styled.nav`
	 /*  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); 
		background-size: 100vw 100vh;
		background-repeat: no-repeat;		 */

		.nav{
		position:relative;
		z-index: 100;
	}
	.capa{
		position: fixed;
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.6);
		z-index: -1;
		top: 0;left: 0;
	}
	/*Estilos para el encabezado b*/
	.header{
		width: 100%;
		height: 100px;
		position: fixed;
		top: 0;left: 0;
	}
	.container{
		width: 90%;
		max-width: 1200px;
		margin: auto;
	}
	.container .btn-menu, .logo{
		float: left;
		line-height:100px;
	}
	.container .btn-menu label{
		color: #fff;
		font-size: 25px;
		cursor: pointer;
	}
	.logo h1{
		color: #fff;
		font-weight: 400;
		font-size: 22px;
		margin-left: 10px;
	}
	.container .menu{
		float: right;
		line-height: 100px;
	}

	.container .menu a{
		display: inline-block;
		padding: 15px;
		line-height: normal;
		text-decoration: none;
		color:white;
		transition: all 0.3s ease;
		border-bottom: 2px solid transparent;
		font-size: 1rem;
		margin-right: 5px;
	}
	.container .menu a:hover{
		border-bottom: 2px solid #b91414;
		padding-bottom: 5px;
	}

	/*Fin de Estilos para el encabezado*/

	/*Menù lateral*/
 	#btn-menu{
		display: none;
	}
	.btn-menu h2{
		position: relative;
		left: 150px;
		color: rgb(197, 190, 190);
		font-size: 1.5rem;
		
		font-family:Poppins;
	}
	
	.container-menu{
		position: absolute;
		background: rgba(0,0,0,0.5);
		width: 100%;
		height: 100vh;
		top: 0;left: 0;
		transition: all 500ms ease;
		opacity: 0;
		visibility: hidden;
	}
	#btn-menu:checked ~ .container-menu{
		opacity: 1;
		visibility: visible;
	}
	.cont-menu{
		width: 100%;
		max-width: 150px;
	
		height: 100vh;
		position: relative;
		transition: all 500ms ease;
		transform: translateX(-100%);
	}
	#btn-menu:checked ~ .container-menu .cont-menu{
		transform: translateX(0%);
		color: white;
	}
	.cont-menu nav{
		transform: translateY(15%);
	}
	.cont-menu nav a{
		display: block;
		text-decoration: none;
		padding: 20px;
		color: #c7c7c7;

	}
	.cont-menu nav a:hover{
		border-left: 5px solid #c7c7c7;
		font-size: 1.3rem;
	
	}
	.cont-menu label{
		position: absolute;
		right: 5px;
		top: 10px;
		color: #fff;
		cursor: pointer;
		font-size: 18px;
	}

`;


export default Navigation