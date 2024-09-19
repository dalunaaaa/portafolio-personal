let navBarVid =document.createElement('div');
navBarVid.className = "nav-bar-div";

let imgLogo = document.createElement('img')
imgLogo.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fparrot-logo-design-vector-template_559774-665.jpg&f=1&nofb=1&ipt=4633a19f87ba9b4b0b9f90f5a9c50dcfa8ab3000c8b21041243625a9f92356ff&ipo=images";
imgLogo.className="img-log";
navBarVid.appendChild(imgLogo);

let h2 =document.createElement('h2');
h2.innerText = "Dania Luna";
navBarVid.appendChild(h2);


export  {navBarVid}