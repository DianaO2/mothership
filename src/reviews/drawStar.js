
export function drawStar(rating) {
  let maxRating = 5;
  let ratingStart="";
  // Genera el HTML con el número de estrellas según el rating
  for (let i = 0; i < maxRating; i++) {
      // Agrega una estrella completa al HTML
      if(rating == 1){
        ratingStart = `<img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">`
      }else if(rating == 2){
        ratingStart= `<img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">       
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">`
      }else if(rating == 3){
       ratingStart= `<img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
       <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
       <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">`
      }else if(rating == 4){
        ratingStart= `<img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">`
      }else{
        ratingStart = `<img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">
        <img src="https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png">`
      }
  }
  let star = document.querySelectorAll(".fa-star");
  return star.innerHTML= ratingStart;

}
