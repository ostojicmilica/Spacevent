$(document).ready(function () {

    "use strict";

    $(window).load(function () {

        // Preloader
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });

        // Masonry
        var cMasnory = $(".container-masonry");

        cMasnory.imagesLoaded(function () {
            cMasnory.isotope({
                itemSelector: ".portfolio-item",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: 0,
                    gutter: 0
                }
            });
        });

        // Filter Items on Button Click 
        $(".portfolio-filter").on("click", ".categories", function (e) {
            e.preventDefault();
            var filterValue = $(this).data("filter");
            cMasnory.isotope({
                filter: filterValue
            });

            $('.portfolio-filter a').removeClass('active');
            $(this).closest('a').addClass('active');

        });


    });


    // Off-screen Navigation
    var hamMenu = $(".ham-menu-toggle");
    var hamMenuDropdown = $(".ham-menu-dropdown");
    var dropdownInner = $(".dropdown-inner");

    // Off-screen Navigation Close
    function navClose() {
        hamMenu.removeClass("active");
        hamMenuDropdown.removeClass("open");
        dropdownInner.removeClass("current");
    }

    // Off-screen Navigation Open
    function navOpen() {
        hamMenu.on("click", function (e) {
            e.preventDefault();
            if ($(this).is(".active")) {
                navClose();
            } else {
                $(this).addClass("active");
                hamMenuDropdown.addClass("open");
                dropdownInner.addClass("current");
            }

        });
    }

    navOpen();

    // Off-screen Navigation hide 
    var menuLinks = $(".main-menu li > a");

    menuLinks.on("click", function (e) {
        e.preventDefault();
        navClose();
        menuLinks.removeClass("current");
        $(this).addClass("current");
    });

    // Single Page Nav
    dropdownInner.singlePageNav({
        updateHash: false,
        filter: ":not(.external)",
        offset: 0,
        speed: 1000,
        currentClass: "current",
        easing: "swing"
    });

    // Smooth Scroll Navigation
    var bannerIcon = $(".banner-icon");

    bannerIcon.on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });


    // Hero-Carousel
    var slide = $(".slide");
    var imageCarousel = $(".hero-carousel-inner");

    slide.each(function () {
        var imgSrc = $(this).children().attr("src");
        $(this).children("img").remove();
        $(this).css('background-image', 'url("' + imgSrc + '")');
    });

    imageCarousel.each(function () {
        var heroCarousel = $(".hero-carousel");
        var dataLoop = heroCarousel.data("loop");
        var dataAutoplay = heroCarousel.data("autoplay");
        var timeOut = heroCarousel.data("interval");

        $(this).owlCarousel({
            animateOut: 'fadeOut',
            items: 1,
            loop: dataLoop,
            autoplay: dataAutoplay,
            autoplayTimeout: timeOut,
            margin: 0,
            nav: true,
            navText: ['<i class="mdi mdi-keyboard-backspace"></i>', '<i class="mdi mdi-keyboard-backspace"></i>']
        });
    });

    // Latest Work Carousel
    var lWorkCarousel = $(".latest-work-carousel");

    lWorkCarousel.owlCarousel({
        items: 1,
        margin: 0,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000
    });


    // Skillbar 
    var skillbar = $(".skillbar");

    skillbar.waypoint(function () {
        skillbar.each(function () {
            $(this).find(".skillbar-child").animate({
                width: $(this).data("percent")
            }, 1000);
        });
    }, {
        offset: "80%"
    });


    // Testimonials Carousel 
    var tCarousel = $(".testimonial-carousel");

    tCarousel.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        autoHeight: true,
        autoplay: true

    });

    // Magnific Popup
    var videoBtn = $(".video-popup-btn");

    videoBtn.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 500,
        gallery: {
            enabled: true
        }
    });

});