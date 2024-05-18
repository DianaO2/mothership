import { mostrarOpinion } from "../opiniones/tarea1";
import {mostrar } from "../respuestas/tareadiana"
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
              <div>
                  <p class="rating">${estrellas}</p>
              </div>
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

function reviews() {
  const slideShow = document.querySelector(".swiper-wrapper");

  // Array de objetos que contiene la información de cada review
  const reviewsData = [
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name: "Maria Perez",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Excelente atención, muy amables y cumplidos."
    },
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name: "Carlos Diaz",
      rating: "⭐⭐",
      comment: "Muy demorado, tuve una mala experiencia."
    },
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name: "Aaron Garcia",
      rating:"⭐⭐⭐⭐",
      comment: "Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
    },
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name: "Maria Guerrero",
      rating: "⭐⭐⭐",
      comment:"Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
    },
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name: "Luisa Galeno",
      rating: "⭐⭐⭐⭐",
      comment:  "muy bonito, Pero se demoro la entrega más tiempo del estimado."
    },
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name: "Marcos Garzón",
      rating:"⭐⭐⭐⭐⭐",
      comment:"Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
    },
    {
      imgUrl: "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name:"Luciano Duarte",
      rating:"⭐",
      comment:"Se demoro la entrega más tiempo del estimado."
    },
    {
      imgUrl:"https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name:"Linda Patrón",
      rating:"⭐⭐",
      comment:"No me gusto la atención"
    },
    {
      imgUrl:"https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
      name:"Julio Patrón",
      rating:"⭐⭐⭐",
      comment:"Me gusto la atención"
    }
  ];
 
  // Itera sobre el array de objetos y crea el HTML para cada review
  reviewsData.forEach((review, index )=> {
      const id = `review${index + 1}`;
      slideShow.insertAdjacentHTML("beforeend", cardReview(id, review.imgUrl, review.name, review.rating, review.comment));
    });
    // const cards = document.querySelectorAll(".card");
    // if(cards.length > 0 ){
    //   cards.forEach((elemnt)=>{
    //     elemnt.addEventListener("click", (e)=>{
    //       const comment = elemnt.querySelector(".text").textContent;
    //       const imgUrl = elemnt.querySelector(".slideshow-img").src;
    //       const rating = elemnt.querySelector(".rating").textContent;
    
    //       const review = {
    //         comment: comment,
    //         imagen: imgUrl,
    //         rating: rating
    //       }
    //       const datos =  JSON.stringify(review)
    //       const reviewCard = localStorage.setItem("review", datos);
    //       const review1 = localStorage.getItem("review")
    //       const comentario = JSON.parse(review1);
    //       const comentarios = comentario.comment;
    //       const imagen = comentario.imgUrl;
    //       const rating1 = comentario.rating;

    //     });
    //   });
    // }
    const cards = document.querySelectorAll(".card");
  if (cards.length > 0) {
    cards.forEach((element) => {
      element.addEventListener("click", (e) => {
        const comment = element.querySelector(".text").textContent;
        const imgUrl = element.querySelector(".slideshow-img").src;
        const rating = element.querySelector(".rating").textContent;
        
        const review = {
          comment: comment,
          imagen: imgUrl,
          rating: rating
        };

        // Guarda los datos de la opinión seleccionada en localStorage
        localStorage.setItem("selectedReview", JSON.stringify(review));

        // Llama a la función mostrarOpinion con los datos de la opinión seleccionada
        mostrarOpinion(app, review.comment, review.imgUrl, review.rating);
        mostrar(2)
      });
    });
  }
  
}

export {cardReview, elements, reviews };
