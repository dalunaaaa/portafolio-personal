function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(item());
    return section
}
function header (){
    let div = document.createElement('div');
    div.className ='header';

    let h2 = document.createElement('h2');
    h2.innerHTML = "proyectos"
    div.appendChild (h2);

    let btn = document.createElement('btn');
    btn.innerHTML = "GitHub";
    div.appendChild(btn);

    return div;

}
function item (){
    let div = document.createElement('div');
    div.innerText= "item de lista";

    return div;
}


export{proyectos};