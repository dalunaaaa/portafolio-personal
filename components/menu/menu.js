export function menu() {
    // Crear el menú lateral
    let menu = document.createElement('nav');
    menu.className = 'side-menu';

    // Botón para cerrar el menú
    let closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerText = 'X';
    closeBtn.onclick = () => {
        menu.style.width = '0'; // Cerrar el menú
    };
    menu.appendChild(closeBtn);

    // Opciones del menú con íconos/colores
    let menuItems = [
        { name: 'Nombre Herramienta', color: 'blue' },
        { name: 'Nombre Herramienta', color: 'orange' },
        { name: 'Nombre Herramienta', color: 'green' },
        { name: 'Nombre Herramienta', color: 'red' },
        { name: 'Nombre Herramienta', color: 'black' }
    ];

    menuItems.forEach(item => {
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        let icon = document.createElement('span');
        icon.className = 'menu-icon';
        icon.style.backgroundColor = item.color;

        let text = document.createElement('span');
        text.innerText = item.name;

        menuItem.appendChild(icon);
        menuItem.appendChild(text);
        menu.appendChild(menuItem);
    });

    // Sección de contacto
    let contactSection = document.createElement('div');
    contactSection.className = 'contact-section';

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Nombre';

    let inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Correo';

    let textArea = document.createElement('textarea');
    textArea.placeholder = 'Mensaje';

    let sendBtn = document.createElement('button');
    sendBtn.innerText = 'Enviar';
    
    contactSection.appendChild(inputName);
    contactSection.appendChild(inputEmail);
    contactSection.appendChild(textArea);
    contactSection.appendChild(sendBtn);

    menu.appendChild(contactSection);

    return menu;
}
    