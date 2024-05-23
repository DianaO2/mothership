export function drawStar(rating) {
  const maxRating = 5;
  const starUrl = "https://raw.githubusercontent.com/DianaO2/mothership/erika_reviews/src/assets/imagenes/Star.png";
  let ratingStart = "";

  // Genera el HTML con el número de estrellas según el rating
  for (let i = 0; i < maxRating; i++) {
    // Determina si la estrella actual debe estar llena o vacía
    const starHtml = i < rating ? `<img src="${starUrl}">` : `<img src="${starUrl}">`;
    ratingStart += starHtml;
  }

  // Devuelve el HTML generado para las estrellas
  return ratingStart;
}
