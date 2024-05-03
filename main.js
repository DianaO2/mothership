import './style.css';

const app = document.getElementById('app');

//Creación de los elementos del DOM
const header = document.createElement("header");
const section = document.createElement("section");
const buttonOpinions = document.createElement("button");
const review1 = document.createElement("article");
const review2 = document.createElement("article");
const review3 = document.createElement("article");

//Creación de clases
header.classList.add("header");
section.classList.add("section-reviews");
buttonOpinions.classList.add("boton-opiniones");
review1.classList.add("review1");
review2.classList.add("review2");
review3.classList.add("review3");

buttonOpinions.textContent= "Opiniones";

// Se agregan elementos al Dom.
header.appendChild(buttonOpinions);
section.appendChild(review1);
section.appendChild(review2);
section.appendChild(review3);

app.appendChild(header);
app.appendChild(section);

const cardReview = (src, nombre, cantidadDeReseñas, estrellas, tiempo, texto)=>{
    const card=`
    <hr>
    <div class="container-img-nombre">
        <img src=${src} alt="foto de perfil"/>
        <div>
            <h3>${nombre}</h3>
            <p>${cantidadDeReseñas}</p>
        </div>
        
    </div>
    <div>
        <p>${estrellas}</p>
        <p>${tiempo}</p>
    </div>
    <p>${texto}</p>
    
    `;
return card;
}

// Selección de elementos del Dom
const reseña1 = document.querySelector(".review1");
const reseña2 = document.querySelector(".review2");
const reseña3 = document.querySelector(".review3");


const sectionReseña = document.querySelector(".section-reviews");
const botonReseña = document.querySelector(".boton-opiniones");

//Se agregan reviews al articulo
reseña1.insertAdjacentHTML('afterbegin', cardReview("./src/assets/imagenes/account_circle_FILL0_wght400_GRAD0_opsz48.png", "Maria Perez", "1 reseña", "⭐⭐⭐⭐⭐", "Hace 2 meses", "Excelente atención, muy amables y cumplidos."));
reseña2.insertAdjacentHTML('beforeend', cardReview("./src/assets/imagenes/account_circle_FILL0_wght400_GRAD0_opsz48.png", "Carlos Cruz", "3 reseñas", "⭐⭐", "Hace 6 meses", "Muy demorado, tuve una mala experiencia."));
reseña3.insertAdjacentHTML('beforeend', cardReview("./src/assets/imagenes/account_circle_FILL0_wght400_GRAD0_opsz48.png", "Aaron Garcia", "5 reseñas", "⭐⭐⭐⭐", "Hace 2 años", "Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."));


//Evento para mostrar reviews
botonReseña.addEventListener("click", ()=>{
    sectionReseña.style.display = "flex";
})