import Ecomerce from "../img/react-ecomerce.png";
import Agenda from "../img/php-agenda.png"
import Todo from "../img/todo-mern.png"
import Toquem from "../img/toquemEl-Dom.png"
import CovidApp from "../img/js-covimap.png"
import Portafolio from "../img/portafolio.png"


const ProjectsData =[
   {
      id: 1,
      title: 'Ecomerce',
      image: Ecomerce ,
       git:'https://github.com/LDvargasHidalgo/LaMamona', 
      deploy:"https://la-mamona-e.vercel.app/gallery/pescado",
      language:"react"
   },
   {
      id: 2,
      title: 'Agenda',
      image:Agenda,
      git:'https://github.com/LDvargasHidalgo/crud-mvc-php',
      deploy:"http://crud-php-citas.epizy.com/crud-citas-poo-mvc/index.php",
      language:"php"
   },
   {
      id: 3,
      title: 'TodoList',
      image:Todo,
      git:'https://github.com/LDvargasHidalgo/TodoListMERN',
      deploy:"https://todolist-mern2022.herokuapp.com/",
      language:"mern"
   },
   {
      id: 4,
      title: ' Música',
      image:Toquem,
      git:'https://github.com/LDvargasHidalgo/ProyectosEducamas/tree/main/JS/proyecto%20de%20musica',    
      language:"js"
   },
   {
      id: 5,
      title: 'CovidApp',
      image:CovidApp,
      git:'https://github.com/Jhuset2003/Impacto_Covid-19_en_el_mundo', 
      deploy:"https://jhuset2003.github.io/Impacto_Covid-19_en_el_mundo/",   
      language:"js"
   },
   {
      id: 6,
      title: 'Portafolio',
      image:Portafolio, 
      git:'https://github.com/LDvargasHidalgo/full-portafolio', 
      deploy:"https://full-portafolio.vercel.app/",   
      language:"react"
   },
];

export default ProjectsData;