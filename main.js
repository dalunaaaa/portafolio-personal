import { navBarVid } from "./components/navBar/navBar.js";
import { proyectos } from "./components/project/project.js";
import { menu } from "./components/menu/menu.js";

let DOM = document.querySelector("#root");

/* Menú lateral */
let sideMenu = menu();
DOM.appendChild(sideMenu);

/* navBar */
let navBAr = document.createElement('section');
navBAr.className= "nav-Bar";
navBAr.appendChild(navBarVid);
DOM.appendChild(navBAr);

/* project */
let project = document.createElement('section');
project.classList= "project";
project.appendChild(proyectos());
DOM.appendChild(project);

// Botón para abrir el menú
let openMenuBtn = document.createElement('button');
openMenuBtn.innerText = 'Abrir Menú';
openMenuBtn.className = 'open-menu-btn';
openMenuBtn.onclick = () => {
    sideMenu.style.width = '250px'; // Abre el menú
};

DOM.appendChild(openMenuBtn);
