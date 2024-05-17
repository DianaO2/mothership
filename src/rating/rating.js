import './rating.css';


export function mostrarRating (puntaje, app ){
    const contenedorPrincipal= document.createElement('div')
    contenedorPrincipal.classList.add('contenedorRating')
    // logo de google
    const logoGoogle = document.createElement('img')
    logoGoogle.classList.add('logoGoggle')
    logoGoogle.src = 'src/img/Google.svg'
    // contenedor de puntuacion y estrellas
    const containerPyE = document.createElement('div')
    containerPyE.classList.add('containerEstrellas')

    const titulo = document.createElement('h3')
    titulo.classList.add('tituloGoogle')
    titulo.textContent = 'Google Rating'
    containerPyE.appendChild(titulo)

    const puntuacion = document.createElement('h2')
    puntuacion.classList.add('puntos')
    puntuacion.textContent = puntaje
    containerPyE.appendChild(puntuacion)

    if (puntaje >= 1 || puntaje < 1){
        const estrella = document.createElement('img')
        estrella.classList.add('estrella')
        estrella.src = 'src/img/Star.svg'
        containerPyE.appendChild(estrella)
    }

contenedorPrincipal.appendChild(logoGoogle)
contenedorPrincipal.appendChild(containerPyE)
app.appendChild(contenedorPrincipal)

}

