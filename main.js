import {elements, reviews} from "./src/reviews/reviews.js";
import {mostrar} from "./tareadiana.js";
import {initializeSwiperComponent} from "./src/reviews/carrusel.js"


const app = document.getElementById('app');

// Creación de los elementos del DOM
elements(app);
// Llama a la función reviews después de haber agregado los elementos al DOM

reviews();
initializeSwiperComponent();


mostrar(2);

