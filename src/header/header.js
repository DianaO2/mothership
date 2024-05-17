import "./header.css"
export const header = (app) => {
  const header = `
        <header>
            <nav class="navbar">
                <img src="../assets/imagenes/Logo_header.png" class="logo">
            <ul class="menu">
                <li class="menu-item"><a href="#"><img src="../assets/imagenes/gridicons_create.png>Crear Campaña</a></li>
                <li class="menu-item"><a href="#"><img src="../assets/imagenes/material-symbols-light_reviews-outline.png>Opiniones de Google</a></li>
                <li class="menu-item dropdown">
                    <button class="dropdown-btn"><img src="../assets/imagenes/settings_24px.png>Configuración<img src="../assets/imagenes/chevron-down.png"></button>
                    <ul class="dropdown-content">
                        <li><a href="#">Opción 1</a></li>
                        <li><a href="#">Opción 2</a></li>
                        <li><a href="#">Opción 3</a></li>
                    </ul>
                </li>
            </ul>
           </nav>
        </header>
    `;
    app.insertAdjacentHTML('afterbegin', header);

};
