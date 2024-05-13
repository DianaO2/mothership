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

const swiper = document.querySelector('.swiper');
// Definir la función onSwiperInit
function onSwiperInit(swiper) {
    swiper.slideNext(3, false);
}

// Agregar un listener para el evento init de Swiper

swiper.addEventListener('init', function() {
    onSwiperInit(this.swiper);
});