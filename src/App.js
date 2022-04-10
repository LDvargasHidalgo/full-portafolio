import React from 'react';
import styled from 'styled-components';
import {Contact }from './Components/Contact/Contact'
import  Nav  from './Components/Navbar/Navbar';
import  Particles  from './Components/Particles/Particles';
import HomePages from './Components/Home/HomePages';
import Projects from './Components/Projects/Projects';
import {BrowserRouter, Route, Routes}from 'react-router-dom'



function App() {
  return (  
 <BrowserRouter>
<Particles/>
{/* <Sidebar/> */}
<Nav/>
 <>
 <Routes>   
  <Route path="/" element={  <HomePages/>} />   
   <Route path="/contact" element={  <Contact/>} />
<Route path="/projects" element={  <Projects/>} /> 
   </Routes>
   </>
   </BrowserRouter>
  );
}
export default App;
