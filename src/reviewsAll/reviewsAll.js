import "./reviewsAll.css"
export function reviewsAll(reseñas){
    const container = document.createElement("div");
    container.classList.add("container-reviewsAll");
    const containerReviews = document.querySelector(".section-rating")
    containerReviews.appendChild(container)

    const card =`
    <div class="review-card">
        <div class="review-text">Reseñas totales</div>
    <div class="review-count">${reseñas}</div>
</div>`
return container.insertAdjacentHTML("beforeend", card)

}