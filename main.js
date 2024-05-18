import {elements, reviews} from "./src/reviews/reviews.js";
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

opiniones.addEventListener("click", reviews);


// mostrarOpinion(app,"Me gusto la atención","https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png","⭐⭐⭐")
initializeSwiperComponent();





