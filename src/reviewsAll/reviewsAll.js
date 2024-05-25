import "./reviewsAll.css"
export function reviewsAll(reseñas){
 
    const containerReviews = document.querySelector(".section-rating")

    const card =`
    <div class="review-card">
        <div class="review-text">Reseñas totales</div>
    <div class="review-count">${reseñas}</div>
</div>`
return containerReviews.insertAdjacentHTML("beforeEnd", card)

}