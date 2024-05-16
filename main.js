

import {elements, reviews} from "./src/reviews/reviews.js";
import {mostrar} from "./tareadiana.js";
import { mostrarOpinion } from "./src/opiniones/tarea1.js";


const app = document.getElementById('app');

// Creación de los elementos del DOM
elements(app);
// Llama a la función reviews después de haber agregado los elementos al DOM
reviews();
mostrarOpinion(app);
mostrar(2);



