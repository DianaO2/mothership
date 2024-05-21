import { mostrarOpinion } from "../opiniones/tarea1";
import {mostrar } from "../respuestas/tareadiana"
import { drawStar } from "./drawStar";
const cardReview = (
  id,
  src,
  nombre,
  estrellas,
  texto
) => {
  const card = `
          <div class="swiper-slide" >
            <div class="card" data-id="${id}">
              <div class="container-img-nombre">
                  <img src=${src} alt="foto de perfil" class="slideshow-img"/>
              </div>
                <span class="stars">${estrellas}</span>
              <div class="container-text">
                <p class="text">${texto}</p>
                <p class="text">from: ${nombre}</p>
                <a href="https://www.google.com" target="_black" class="link">See on Google</a>
              </div>
            </div>
          </div>
        
      `;
  return card;
};

function elements(app) {
  const section = document.createElement("section");
  const swiperWrapper = document.createElement("div");
  const btnNext = document.createElement("div");
  const btnPrev = document.createElement("div");
  
  // Creación de clases
  section.classList.add("swiper");
  swiperWrapper.classList.add("swiper-wrapper");
  btnNext.classList.add("swiper-button-next");
  btnPrev.classList.add("swiper-button-prev");
  
  section.appendChild(swiperWrapper)
  section.appendChild(btnNext)
  section.appendChild(btnPrev)

  const createApp = app.appendChild(section);
  return createApp;
}

async function reviews(){
  const slideShow = document.querySelector(".swiper-wrapper");
    try{
      const response = await fetch("https://mocki.io/v1/b29fad5b-4d51-483a-a116-91880e9774cf")
      const reviews = await response.json();

      return await reviews.reviews.forEach((review)=> {
      const starsHTML = drawStar(review.rating);
      slideShow.insertAdjacentHTML("beforeend", cardReview(review.id, review.image, review.name, starsHTML, review.body));
    });
   
    
}catch(e){
  console.log(e)
}
}
function viewReviews() {
  const cards = document.querySelectorAll(".card");
  let activeCard = null;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (activeCard === card) return; // No hacer nada si la tarjeta ya está activa

      const opinionContainer = document.querySelector('.container-card');
      const templateContainer = document.querySelector('.containerPlantilla');
      if (opinionContainer && templateContainer) {
        opinionContainer.remove();
        templateContainer.remove()
      }
      if (activeCard) {
        activeCard.classList.remove("active"); // Quitar clase activa de la tarjeta anterior
      }

      card.classList.add("active"); // Añadir clase activa a la nueva tarjeta
      activeCard = card; // Actualizar la tarjeta activa

      const comment = card.querySelector(".text").textContent;
      const imgUrl = card.querySelector(".slideshow-img");
      const stars = card.querySelector(".stars").textContent;

      const review = {
        comment: comment,
        imagen: imgUrl.src,
        rating: stars
      };

      localStorage.setItem("selectedReview", JSON.stringify(review));

      mostrarOpinion(app, review.comment, review.imagen, review.rating);
      mostrar(2);
    });
  });
}
export {cardReview, elements, reviews, viewReviews};
