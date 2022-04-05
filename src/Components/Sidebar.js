import React from 'react'
import styled from 'styled-components'
import Navigation from "./Navigation"

/* espacio gris al lado izquierdo de la pantalla */
function Sidebar() {
  return (
   <SidebarStyled>
<Navigation/>
   </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
width:16.3rem;
position:fixed;
height:100vh;
overflow: hidden;
background-color: var(--sidebar-dark-color);

`;

export default Sidebar