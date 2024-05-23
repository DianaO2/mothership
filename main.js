import {elements, reviews, viewReviews} from "./src/reviews/reviews.js";
import {initializeSwiperComponent} from "./src/reviews/carrusel.js"
import { header } from "./src/header/header.js";
import { mostrarRating } from "./src/rating/rating.js";
import { reviewsAll } from "./src/reviewsAll/reviewsAll.js";


const app = document.getElementById('app');
const totalReviews = localStorage.getItem("reviews")
const PromedioPuntos = localStorage.getItem("promedio")
mostrarRating(PromedioPuntos, app);
reviewsAll(totalReviews)
elements(app);
header(app)
// Creación de los elementos del DOM

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





