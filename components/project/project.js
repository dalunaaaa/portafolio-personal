import { header } from "../header/header.js";



function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(item());
    return section
}

function item (){
    let div = document.createElement('div');
    div.innerText= "item de lista";

    return div;
}


export{proyectos};