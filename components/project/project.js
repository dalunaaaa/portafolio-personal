import { header } from "../header/header.js";
import { menu } from "../menu/menu.js";
import { dataProyectos } from "../../data/data.js";



function proyectos(){
    let section = document.createElement('section');
    section.className ="seccion-proyectos"
    section.appendChild(header());
    section.appendChild(listaProyectos());
    return section
}

function listaProyectos (){
    let div = document.createElement('div');
    div.className = "Lista-proyectos";
    
    dataProyectos.forEach((proyecto)=>{
        div.appendChild(item(proyectos.nombre,proyectos.github,proyectos.githubPage, proyectos.staks));
    });

    return div;
}


function item (texto,github,githubPage,staks){
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.className ="link-githubPage";
    a.href= githubPage;
    a.innerText = "Nombre Proyecto";
    div.appendChild(a);

    let stack = document.createElement('div');
    stack.innerText ="[ js, css, html]";
    div.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = github;
    btnGithub.innerText = "github";
    div.appendChild(btnGithub);

    
    return div;
}


export{proyectos};