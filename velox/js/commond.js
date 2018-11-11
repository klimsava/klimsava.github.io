$(function() {
    $(".baner-slider").slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn--active');
        $('.menu-nav').toggleClass('menu-nav--active');
    });

});