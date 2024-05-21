
export function drawStar(rating) {
  let maxRating = 5;
  let ratingStart="";
  // Genera el HTML con el número de estrellas según el rating
  for (let i = 0; i < maxRating; i++) {
      // Agrega una estrella completa al HTML
      if(rating == 1){
        ratingStart = "⭐"
      }else if(rating == 2){
        ratingStart= "⭐⭐"
      }else if(rating == 3){
       ratingStart= "⭐⭐⭐"
      }else if(rating == 4){
        ratingStart= "⭐⭐⭐⭐"
      }else{
        ratingStart = "⭐⭐⭐⭐⭐"
      }
  }
  let star = document.querySelectorAll(".fa-star");
  return star.innerHTML= ratingStart;

}
