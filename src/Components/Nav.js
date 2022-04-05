import React from 'react'
import "../styles/nav.css"
import Sidebar from './Sidebar'
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <div>
       	<header class="header">
		<div class="container">
		<div class="btn-menu">
			<label for="btn-menu">☰</label>
		</div>
			<div class="logo">
				<h1>Desarrolladora Full Stack</h1>
			</div>
			<nav class="menu">
				<NavLink to="../"></NavLink>
				<a href="#">Inicio</a>
				<a href="#">Proyectos</a>
				<a href="#">Contacto</a>
			</nav>
		</div>
	</header>
	<div class="capa"></div>
	<input type="checkbox"  id="btn-menu"/>
	<div class="container-menu">
	<div class="cont-menu">
		<nav>
		<Sidebar/>	
		</nav>
		<label for="btn-menu">✖️</label>
	</div>
</div>
    </div>
  )
}

export default Navigation