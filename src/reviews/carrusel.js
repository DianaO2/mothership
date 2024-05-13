import "./reviews.css";

export function initializeSwiperComponent() {
    new Swiper(".swipper-wrapper", {
        loopPreventsSliding:false,
        direction: "horizontal", // Cambiar a horizonta
        effect:"cards",
        centeredSlides: true,
        slidesPerView: 3, // Mostrar 3 slides a la vez
        spaceBetween: 3,
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
           
        
            
        },
       
    });
    
}


