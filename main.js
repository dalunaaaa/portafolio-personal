import { navBarVid } from "./components/navBar/navBar.js";
import { proyectos } from "./components/project/project.js";
let DOM = document.querySelector("#root");

/* navBAr*/
let navBAr = document.createElement('section');
navBAr.className= "nav-Bar";
navBAr.appendChild(navBarVid);
DOM.appendChild(navBAr);


let project = document.createElement('section');
project.classList= "project";
project.appendChild(proyectos());
DOM.appendChild(project);


