import {elements, reviews} from "./src/reviews/reviews.js";
import {mostrar} from "./src/respuestas/tareadiana.js";
import {initializeSwiperComponent} from "./src/reviews/carrusel.js"
import { mostrarOpinion } from "./src/opiniones/tarea1.js";
import { header } from "./src/header/header.js";
import { mostrarRating } from "./src/rating/rating.js";


const app = document.getElementById('app');
header(app)
// Creación de los elementos del DOM
mostrarRating(4.8, app);
elements(app);
// Llama a la función reviews después de haber agregado los elementos al DOM
const opiniones = document.getElementById("opiniones");
opiniones.addEventListener("click", reviews);

const cards = document.querySelectorAll(".swiper-slide");
cards.forEach((card)=>{
    card.addEventListener("click", (e)=>{
        const id= e.target;
        console.log(id)
    })
})




initializeSwiperComponent();
mostrarOpinion(app);
mostrar(2);



