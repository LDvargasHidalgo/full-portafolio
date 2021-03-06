import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
 
    --primary-color:rgb(252, 70, 107);
    --background-dark-color: black;
    --border-color: #2e344e;
    --font-light-color: #fff;
    --sidebar-dark-color: #191D2B;
}
html{
   height: 100%;
}
*{
   padding: 0;
   margin: 0;
   box-sizing:border-box;
   list-style: none;
   text-decoration: none;
   font-size:1.2rem ;
  /*  font-size: 1.2rem; */
}
body {
   background-color: var(--background-dark-color);
   color: var(--font-light-color)
  
}
a{
   color:inherit ;
}
`;
export default GlobalStyle;
