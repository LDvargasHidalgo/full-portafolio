import React from 'react';
import {Contact }from './Components/Contact/Contact'
import  Nav  from './Components/Navbar/Navbar';
import  Particles  from './Components/Particles/Particles';
import HomePages from './Components/Home/HomePages';
import Projects from './Components/Projects/Projects';
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import AboutMe from './Components/About/AboutMe';



function App() {
  return (  
 <BrowserRouter>
<Particles/>
<Nav/>
 <>
 <Routes>   
  <Route path="/" element={  <HomePages/>} />
  <Route path="/AboutMe" element={  <AboutMe/>} />      
   <Route path="/contact" element={  <Contact/>} />
<Route path="/projects" element={  <Projects/>} /> 
   </Routes>
   </>
   </BrowserRouter>
  );
}
export default App;
