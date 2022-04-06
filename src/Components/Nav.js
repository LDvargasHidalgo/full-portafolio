import React from 'react';
import Sidebar from './Sidebar';
import {NavLink} from 'react-router-dom';
import "../styles/nav.css"

function Navigation() {
  return (
    <div className='nav' >
       	<header className="header">
		<div className="container">
		<div className="btn-menu">
			<label for="btn-menu">☰</label>
		</div>
			{/* <div class="logo">
				<h1>Desarrolladora Full Stack</h1>
			</div> */}
			<nav className="menu">
				<NavLink to="/" activeClassName="active-class" exact>Inicio</NavLink>
				<NavLink to="/projects" activeClassName="active-class" exact>Proyectos</NavLink>
				<NavLink to="/contact" activeClassName="active-class" exact>Contacto</NavLink>
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
		<label for="btn-menu" className='btn-menu'>
		<h2>X</h2>
		</label>
		</div>
	</div>
</div>
    </div>
  )
}

export default Navigation