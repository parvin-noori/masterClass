$(document).ready(function () {

// slider
    new Swiper(".slider", {
        loop: true,
        navigation: {
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
        },
    });

    // cook swiper
    new Swiper(".cookSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".cookSwiper-button-next",
            prevEl: ".cookSwiper-button-prev ",
        },
        pagination: {
            el: ".cookSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                // slidesPerGroup: 1.2,
            },
            576: {
                slidesPerView: 2.2,
                // slidesPerGroup: 2.2,
            },
            768: {
                slidesPerView: 3.2,
                // slidesPerGroup: 3.2,
            },
            992: {
                slidesPerView: 4.2,
                // slidesPerGroup: 4.2,
                // allowTouchMove: false,
            },
            1024: {
                slidesPerView: 4.2,
                // slidesPerGroup: 4.2,
                // allowTouchMove: false,
            },
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
        pagination: {
            el: ".trendingSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                // slidesPerGroup: 1.2,
            },
            576: {
                slidesPerView: 2.2,
                // slidesPerGroup: 2.2,
            },
            768: {
                slidesPerView: 3.2,
                // slidesPerGroup: 3.2,
            },
            992: {
                slidesPerView: 4.2,
                // slidesPerGroup: 4.2,
                // allowTouchMove: false,
            },
            1024: {
                slidesPerView: 4.2,
                // slidesPerGroup: 4.2,
                // allowTouchMove: false,
            },
        },
    });
})
