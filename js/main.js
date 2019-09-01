;
(function ($) {
    "use strict";
    $(window).on('load', function (event) {

        //===== scrollIt js

        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: 'linear',
            scrollTime: 500,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -62
        });

        //===== Back To Top

        $(".back-to-top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

        var navTrigger = document.getElementsByClassName('nav-trigger')[0],
            body = document.getElementsByTagName('body')[0];

        navTrigger.addEventListener('click', toggleNavigation);

        function toggleNavigation(event) {
            event.preventDefault();
            body.classList.toggle('nav-open');
        }

    });
    $(window).on('load', function () {

        //===== Prealoder

        $.fakeLoader({
            timeToHide: 1000,
            bgColor: "#34495e",
            spinner: "spinner3"
        });

        //===== Sticky

        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        });

        //===== Back To Top

        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

    });
}(jQuery));