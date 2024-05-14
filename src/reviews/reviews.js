
const cardReview = (
  src,
  nombre,
  estrellas,
  texto
) => {
  const card = `
            <div class="card">
              <div class="container-img-nombre">
                  <img src=${src} alt="foto de perfil"/>
            </div>
          <div>
            <p>${estrellas}</p>
          </div>
            <p class="text">${texto}</p>
            <p class="text">from: ${nombre}</p>
            <a href="www.google.com" class="link">See on Google</a>
          </div>
        </div >
      `;
  return card;
};
function elements(app) {
  const section = document.createElement("section");
 
  // Creación de clases
  section.classList.add("section-reviews");
  
  const createApp = app.appendChild(section);
  return createApp;
}
function reviews() {
  
  const section = document.querySelector(".section-reviews")
  section.style.display = "flex";
  section.style.flexDirection = "row";
  section.style.justifyContent = 'center';
  section.style.alignItems = 'center';
  section.style.gap = "20px";



  
  //Se agregan los reviews a la section
  section.insertAdjacentHTML(
    "beforeend",
    cardReview(
      "/mothership/src/assets/imagenes/Dropdown.png",
      "Maria Perez",
      "⭐⭐⭐⭐⭐",
      "Excelente atención, muy amables y cumplidos."
    )
  );

  section.insertAdjacentHTML(
    "beforeend",
    cardReview(
      "/mothership/src/assets/imagenes/Dropdown.png",
      "Carlos Cruz",
      "⭐⭐",
      "Muy demorado, tuve una mala experiencia."
    )
  );

  section.insertAdjacentHTML(
    "beforeend",
    cardReview(
      "/mothership/src/assets/imagenes/Dropdown.png",
      "Aaron Garcia",
      "⭐⭐⭐⭐",
      "Excelente! todo muy bonito, excelente calidad y atención, Pero se demoro la entrega más tiempo del estimado."
    )
  );
  const card = document.querySelectorAll(".card");
  card.forEach((card) =>{ 
    card.style.display= "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.flexDirection = "column";
    card.style.width = "291.19px"; 
    card.style.height = "362.4px";
    card.style.border = '1px solid white'; 
    card.style.padding = "20px";
    card.style.borderRadius = '20px';
    card.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.5)';
  })
  
  const text = document.querySelectorAll(".text");
  text.forEach((p)=>{
    p.style.color = "#6A6A6A";
  })
  const link = document.querySelectorAll(".link");
  link.forEach((a)=>{
 // Quitar el subrayado del enlace
    a.style.textDecoration = "none";
    a.style.color="#97509F";
  })
}
export {cardReview, elements, reviews };
