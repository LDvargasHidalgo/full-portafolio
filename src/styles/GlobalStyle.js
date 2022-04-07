import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    
    --background-dark-color: #10121A;
    --border-color: #2e344e;
    --font-light-color: #fff;
    --sidebar-dark-color: #191D2B;
}

*{
   padding: 0;
   margin: 0;
   box-sizing:border-box;
   list-style: none;
   text-decoration: none;
   font-family: 'Roboto', sans-serif;
   font-size:1.2rem ;
  /*  font-size: 1.2rem; */
}
body {
   background-color: var(--background-dark-color);
   color: var(--font-light-color)
  
}
a{
   font-family: inherit;
   color:inherit ;
}
`;
export default GlobalStyle;
