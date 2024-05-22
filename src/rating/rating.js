import './rating.css';


export function mostrarRating (puntaje, app ){
    const sectionRating = document.createElement("section")
    sectionRating.classList.add("section-rating")

    const contenedorPrincipal= document.createElement('div')
    contenedorPrincipal.classList.add('contenedorRating')
    // logo de google
    const logoGoogle = document.createElement('img')
    logoGoogle.classList.add('logoGoggle')
    logoGoogle.src = 'src/img/Google.svg'

    // contenedor del tìtulo, puntuacion y estrellas
    const containerPyE = document.createElement('div')
    containerPyE.classList.add('containerEstrellas')
   
    const titulo = document.createElement('h3')
    titulo.classList.add('tituloGoogle')
    titulo.textContent = 'Google Rating'
    containerPyE.append(titulo)
  
    // contenedor del nùmero y imagen de estrellas
    const containerNyImg = document.createElement('div')
    containerNyImg.classList.add('containerNyImg')
    const puntuacion = document.createElement('h2')
    puntuacion.classList.add('puntos')
    puntuacion.textContent = puntaje
    containerNyImg.appendChild(puntuacion)
    

        if (puntaje <= 5){
            for(let x = 1; x <= puntaje; x++){
                const estrella = document.createElement('img')
                estrella.classList.add('estrella')
                estrella.src = 'src/img/Star.svg'
                containerNyImg.appendChild(estrella)
            }
        }else {
        console.log('supera el lìmite de estrellas por puntuacion maxima')
        }

containerPyE.appendChild(containerNyImg)
contenedorPrincipal.appendChild(logoGoogle)

contenedorPrincipal.appendChild(containerPyE)
sectionRating.appendChild(contenedorPrincipal)
app.appendChild(sectionRating)

}

