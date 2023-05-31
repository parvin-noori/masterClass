$(document).ready(function () {

// slider
    new Swiper(".slider", {
        loop:true,
        navigation: {
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
        },
    });



    // trending swiper
    new Swiper(".trendingSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            992:{
                slidesPerView:4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
})
