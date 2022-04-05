import './App.css';
import styled from 'styled-components';

import  About  from './Components/About';
import  Projects  from './Components/Projects';
import  Contact  from './Components/Contact';
import  Nav  from './Components/Nav';
import  Particles  from './Components/Particles';
import HomePages from './Components/Pages/HomePages';

import {BrowserRouter, Route, Routes}from 'react-router-dom'

function App() {
  return (  
 <BrowserRouter>
<Particles/>
<Nav/>
 <MainContentStyled>
 <Routes>   
   <Route path="/" element={  <HomePages/>} />
   <Route path="/about" element={  <About/>} />
   <Route path="/projects" element={  <Projects/>} />
   <Route path="/contact" element={  <Contact/>} />
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
