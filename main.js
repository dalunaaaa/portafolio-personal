import { navBarVid } from "./components/navBar/navBar.js";
let DOM = document.querySelector("#root");

/* navBAr*/
let navBAr = document.createElement('section');
navBAr.className= "nav-Bar";
navBAr.innerHTML="hola mundo soy navBAr";
navBAr.appendChild(navBarVid);
DOM.appendChild(navBAr);


let project = document.createElement('section');
project.classList= "project";
project.innerText="hola mundo soy project";
DOM.appendChild(project);


