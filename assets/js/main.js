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
        navigation: {
            nextEl: ".trendingSwiper-button-next",
            prevEl: ".trendingSwiper-button-prev",
        },
        breakpoints: {
            0:{
                slidesPerView: 1.2,
            },
            640: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 3.2,
            },
            992:{
                slidesPerView:4.2,
            },
            1024: {
                slidesPerView: 4.2,
            },
        },
    });
})
