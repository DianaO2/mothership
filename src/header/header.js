import "./header.css"
export const header = (app) => {
  const header = `
        <header>
            <nav class="navbar">
                <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Logo_header.png" class="logo">
            <ul class="menu">
                <li class="menu-item"><a><img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/gridicons_create.png">Crear Campaña</a></li>
                <li class="menu-item"><a id="opiniones"><img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/material-symbols-light_reviews-outline.png">Opiniones de Google</a></li>
                <li class="menu-item dropdown">
                    <button class="dropdown-btn"><img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/settings_24px.png">Configuración<img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/chevron-down.png"></button>
                </li>
            </ul>
           </nav>
        </header>
    `;
    app.insertAdjacentHTML('afterbegin', header);

};
