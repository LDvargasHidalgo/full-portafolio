import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {

   --family-title:'Shadows Into Light', cursive;
    --primary-color: #ae0d23;
    --background-dark-color: #10121A;
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
   font-family: 'Berkshire Swash', cursive;
   font-family: 'Happy Monkey', cursive;
   font-family: 'Mulish', sans-serif;
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
