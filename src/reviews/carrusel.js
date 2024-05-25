import "./reviews.css";

export function initializeSwiperComponent() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop:true,
    enabled: true,
    loopedSlides: 3,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0,
    centeredSlides:true,
    mousewheel: {
        invert: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
    },
    breakpoints: {
      // when window width is >= 320px
        320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        },
      // when window width is >= 480px
        640: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
      // when window width is >= 640px
        840: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
        },
    },
  });
}
