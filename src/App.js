import React from 'react';
import styled from 'styled-components';
import {Contact }from './Components/Contact/Contact'
import  Nav  from './Components/Navigation/Nav';
import  Particles  from './Components/Particles/Particles';
import HomePages from './Components/Home/HomePages';
import Projects from './Components/Projects/Projects';
import {BrowserRouter, Route, Routes}from 'react-router-dom'

function App() {
  return (  
 <BrowserRouter>
<Particles/>
<Nav/> 
 <MainContentStyled>
 <Routes>   
<Route path="/" element={  <HomePages/>} />   
   <Route path="/contact" element={  <Contact/>} />
<Route path="/projects" element={  <Projects/>} /> 
   </Routes>
   </MainContentStyled>
   </BrowserRouter>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }`;

export default App;
