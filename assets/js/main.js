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


    // reviews swiper
    new Swiper(".reviewsSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".reviewsSwiper-button-next",
            prevEl: ".reviewsSwiper-button-prev",
        },
        pagination: {
            el: ".reviewsSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                // slidesPerGroup: 1.2,
            },
            576: {
                slidesPerView: 1.5,
                // slidesPerGroup: 2.2,
            },
            768: {
                slidesPerView: 1,
                // slidesPerGroup: 3.2,
            },
            992: {
                slidesPerView: 1,
                // slidesPerGroup: 4.2,
                // allowTouchMove: false,
            },
            1024: {
                slidesPerView: 1,
                // slidesPerGroup: 4.2,
                // allowTouchMove: false,
            },
        },
    });

    //copy link
    let currentUrl = window.location.href;
    $('#copyLinkInput').val(currentUrl);


    // copyLinkBtn
    $('#copyLinkBtn').click(function (e) {
        // Get the text field
        var copyText = document.getElementById("copyLinkInput");

        // // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Provide visual feedback to the user (optional)
        $(this).text('Copied!');

        // Reset the button text after a brief delay (optional)
        setTimeout(function () {
            $('#copyLinkBtn').text('Copy');
        }, 2000);

    })

    //responsive copy link
    $('.responsiveCopyLink').click(function () {
        navigator.clipboard.writeText(currentUrl);
    })

    //video js
    let video = videojs("my-video");
    const myModalEl = document.getElementById('trailerModal')
    myModalEl.addEventListener('shown.bs.modal', event => {
        video.ready( function() {
            this.play();
            video.vhs = null;
            // video.qualityMenu({
            //     "useResolutionLabels": true,
            //     availableQualities: ['auto', '240p', '360p', '480p', '720p', '1080p'],
            //     defaultResolution: '720p'
            // });
        });
        video.on('timeupdate',function () {
            console.log(this.currentTime())
        })
        //  videojs("my-video", {}, () => {
        //     // playbackRates: [0.5, 1, 1.5, 2]
        //     console.log("Inicio");
        //      ratechange
        // })
    })

    // let video = videojs("my-video");
    // if(video){

    // }
    // videojs('my-video', {
    //     playbackRates: [0.5, 1, 1.5, 2]
    // });

})
