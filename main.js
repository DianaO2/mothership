import {
  elements,
  reviewsData,
  uploadReviews,
} from "./src/reviews/reviews.js";
import { initializeSwiperComponent } from "./src/reviews/carrusel.js";
import { header } from "./src/header/header.js";
import { mostrarRating } from "./src/rating/rating.js";
import { reviewsAll } from "./src/reviewsAll/reviewsAll.js";

const app = document.getElementById("app");
// Creación de los elementos del DOM
elements(app);
header(app);

window.addEventListener("load", () => {
  reviewsData().then((reviews) => {
    mostrarRating(reviews.averageRating);
    reviewsAll(reviews.totalReviewCount);
  });
});
// Llama a la función reviews después de haber agregado los elementos al DOM
const opiniones = document.getElementById("opiniones");
opiniones.addEventListener("click", () => {
  uploadReviews(); // Cargar las revisiones y crear el carrusel
  initializeSwiperComponent(); // Inicializar el carrusel
  
});