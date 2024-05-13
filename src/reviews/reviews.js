const cardReview = (
  src,
  nombre,
  estrellas,
  texto
) => {
  const card = `
          <div class="swiper-slide">
            <div class="card">
              <div class="container-img-nombre">
                  <img src=${src} alt="foto de perfil" class="slideshow-img"/>
              </div>
              <div>
                  <p>${estrellas}</p>
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
  // const swiperContainer = document.createElement("div");
  const swiperWrapper = document.createElement("div");
  // const slideshow = document.createElement("div");
  const btnPrev = document.createElement("div");
  const btnNext = document.createElement("div");
  const scroball = document.createElement("div");
 
  // Creación de clases
  section.classList.add("swiper");
  // swiperContainer.classList.add("swiper-container")
  swiperWrapper.classList.add("swiper-wrapper");
  // slideshow.classList.add("slideShow");
  btnPrev.classList.add("swiper-button-prev");
  btnNext.classList.add("swiper-button-next");
  scroball.classList.add("swiper-scrollbar");

  // swiperWrapper.appendChild(slideshow)
  
  section.appendChild(swiperWrapper)
  section.appendChild(btnPrev)
  section.appendChild(btnNext)
  section.appendChild(scroball)
  
  // section.appendChild(swiperWrapper)
  const createApp = app.appendChild(section);
  return createApp;
}
function reviews() {
  const slideShow = document.querySelector(".swiper-wrapper");

  slideShow.insertAdjacentHTML("beforeend", cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Maria Perez",
    "⭐⭐⭐⭐⭐",
    "Excelente atención, muy amables y cumplidos."
  ))
  slideShow.insertAdjacentHTML("beforeend", cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Carlos Cruz",
    "⭐⭐",
    "Muy demorado, tuve una mala experiencia."
  ));
  slideShow.insertAdjacentHTML("beforeend",cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Aaron Garcia",
    "⭐⭐⭐⭐",
    "Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
  ));
  slideShow.insertAdjacentHTML("beforeend",cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Maria Guerrero",
    "⭐⭐⭐",
    "Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
  ));
  slideShow.insertAdjacentHTML("beforeend",cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Luisa Galeno",
    "⭐⭐⭐⭐",
    "muy bonito, Pero se demoro la entrega más tiempo del estimado."
  ));
  slideShow.insertAdjacentHTML("beforeend",cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Marcos Garzón",
    "⭐⭐⭐⭐⭐",
    "Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
  ));
  slideShow.insertAdjacentHTML("beforeend",cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Luciano Duarte",
    "⭐",
    "Se demoro la entrega más tiempo del estimado."
  ));
  slideShow.insertAdjacentHTML("beforeend",cardReview(
    "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Dropdown.png",
    "Linda Patrón",
    "⭐⭐",
    "No me gusto la atención"
  ));
}

export {cardReview, elements, reviews };
