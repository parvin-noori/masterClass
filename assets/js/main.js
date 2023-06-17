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

    //video js(trailer modal)

    let video = videojs("my-video");
    const myModalEl = document.getElementById('trailerModal');
    let overlay;
    myModalEl.addEventListener('shown.bs.modal', event => {
        overlay = $(this).find('.overlay');
        video.ready(function () {
            // this.play();
            video.vhs = null;

        });
        video.on("play", function () {
            overlay.addClass('d-none');
            overlay.removeClass('d-flex')
        });
        video.on("pause", function () {
            overlay.addClass('d-flex');
            overlay.removeClass('d-none')
        })
        //
    })


    //video js(about this class)
    let video2 = videojs("video2");

    video2.ready(function () {
        overlay = $('#' + $(this).attr('id')).closest('.video-wrapper').find('.overlay')
        video2.vhs = null;

    });
    video2.on("play", function () {
        overlay.addClass('d-none');
        overlay.removeClass('d-flex')
    });
    video2.on("pause", function () {
        overlay.addClass('d-flex');
        overlay.removeClass('d-none')
    })

    //category classes swiper
    var swiper = new Swiper(".category-classes-swiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: ".category-classes-swiper-next",
            prevEl: ".category-classes-swiper-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            },
            574: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });

    //scrollspy

    // Hide Header on scroll down
    let prevScrollPos = window.pageYOffset;
    let navbarHeight = $('header').outerHeight();
    var $sections = jQuery(jQuery("#navbar-courses-tab .tab-pane").get().reverse());

    let PSHeight = $('#navbar-courses-tab').outerHeight()
    window.onscroll = function () {
        let navbarCoursesTab = $('#navbar-courses-tab');
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > navbarCoursesTab.offset().top) {
            navbarCoursesTab.addClass('position-sticky');
            navbarCoursesTab.css({'top': navbarHeight})
            prevScrollPos = currentScrollPos;
        }
    }


    //scrollspy
    // Cache the navigation links
    var $navigationLinks = jQuery('#navbar-courses-tab ul.nav li a');


    let navbarCoursesTab = jQuery('#navbar-courses-tab');

    if (navbarCoursesTab.length > 0) {
        // Add click handlers to the navigation links
        $navigationLinks.on('click', function (event) {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store the hash (#)
            var hash = this.hash;
            jQuery('html, body').animate({
                scrollTop: jQuery(hash).offset().top - (navbarHeight + PSHeight) // subtract the fixed header height and some padding

            }, 300, function () {

            });

        });

        // Listen for scroll events
        jQuery(window).on('scroll', function () {

            // Get the current scroll position
            var scrollPosition = jQuery(this).scrollTop();

            // Loop through the sections to find which one is currently visible
            $sections.each(function () {
                var sectionTop;
                sectionTop = jQuery(this).offset().top - (navbarHeight + PSHeight + 10);

                // Check if the section is visible
                if (scrollPosition >= sectionTop) {
                    // Get the id of the current sectionn

                    var id = jQuery(this).attr('id');

                    // Set the active link
                    $navigationLinks.removeClass('active');
                    jQuery('nav a[href="#' + id + '"]').addClass('active');

                    // Break the loop
                    return false;
                }
            });
        });

    }

    //email input validation
    let emailCaptureForm = $("#emailCaptureForm");
    emailCaptureForm.validate({
        errorClass: "error-message",
        validClass: "my-valid-class",
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.insertAfter($(element).parents('.email-wrapper'));
        },
        rules: {
            emailInput: {
                required: true,
            },
            action: "required"
        },
        messages: {
            emailInput: {
                required: "وارد کردن ایمیل الزامی ست",
            },

        }
    });
});
