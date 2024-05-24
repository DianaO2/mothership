
// Crear la tarjeta
const cardReview = (
 comentario,imagen,rating) => {
  const card = `
  <div class="contenedor-Principal">
    <div class="contenedor-card">
      <div class="card1">
      <div class="card-respuesta"
               <div class="imagen-tarjeta">
                 <img src=${imagen} alt="foto de perfil" class="slideshow-img"/>
               </div>
          <div class="text-rating">
            <div class="fa-star">
                ${rating}
            </div>
            <p class="text1">${comentario}</p>
          </div> 
          </div> <br><br><br><br><br>
       <div class="cuadro">
       <div class="imagen-tarjeta">
       <img src="https://github.com/DianaO2/mothership/blob/lesliee_reviews/src/imagen/2.jpeg?raw=true" alt="foto de perfil"/>
     </div>
     <div>
     <p>Nombre del emprendimiento</p><br>
          <div class="responder"> 
            <div class="gracias-opinion"> 
            <p>Gracias por dejarnos tu opinión</p>
          </div> 
           <div class="responder-1">
            <button class="btn-responder">Responder</button>
            <button class="btn-cancelar">Cancelar</button>
            </div> 
            </div> 
        </div>
      </div>
    </div> 
  </div> 
   `;
  return card;
};
export function mostrarOpinion(app,comentario,imagen,rating){
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("container-card")
  tarjeta.insertAdjacentHTML("beforeend", cardReview(comentario,imagen,rating))
app.appendChild(tarjeta)
  }

  


  
