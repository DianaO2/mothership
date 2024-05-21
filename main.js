import {elements, reviews, viewReviews} from "./src/reviews/reviews.js";
import {initializeSwiperComponent} from "./src/reviews/carrusel.js"
import { header } from "./src/header/header.js";
import { mostrarRating } from "./src/rating/rating.js";


const app = document.getElementById('app');
header(app)
// Creación de los elementos del DOM
mostrarRating(4.8, app);
elements(app);
// Llama a la función reviews después de haber agregado los elementos al DOM
const opiniones = document.getElementById("opiniones");

opiniones.addEventListener("click", ()=>{
    reviews()
  .then(() => {
    // Llama a viewReviews después de cargar las tarjetas
    viewReviews();
  })
  .catch((error) => {
    console.error("Error cargando las revisiones:", error);
  });
});

initializeSwiperComponent();





