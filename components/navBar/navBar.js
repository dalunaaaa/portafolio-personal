let navBarVid =document.createElement('div');
navBarVid.className = "nav-bar-div";

let imgLogo = document.createElement('img')
imgLogo.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FLinux-Logo-1996-present.png&f=1&nofb=1&ipt=7049fcf42454f4f2d3432b94f6aa1feac7e18562cac863035bec18531b1f5c7d&ipo=images";
imgLogo.className="img-log";
navBarVid.appendChild(imgLogo);

let h2 =document.createElement('h2');
h2.innerText = "Dania Luna";
navBarVid.appendChild(h2);


export  {navBarVid}