import {elements, reviews} from "./src/reviews/reviews.js";
import {mostrar} from "./src/respuestas/tareadiana.js";
import {initializeSwiperComponent} from "./src/reviews/carrusel.js"
import { mostrarOpinion } from "./src/opiniones/tarea1.js";



const app = document.getElementById('app');

// Creación de los elementos del DOM
elements(app);
// Llama a la función reviews después de haber agregado los elementos al DOM

reviews();
initializeSwiperComponent();
mostrarOpinion(app);
mostrar(2);



