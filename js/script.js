$(document).ready(function(){

    var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' OF ' + slick.slideCount);
    });

    $('.block-reviews_single-item').slick({
        prevArrow: '<div class="img__arrow_right"><a><img src="img/img__arrow_right.png"/></a></div>',
        nextArrow: '<div class="img__arrow_left"><a><img  src="img/img__arrow_left.png"/></a></div>',
        // dots: true,


    });

    $('.menu__button').click(function (e) {
        var target = e.target;
        var menuId = $(target).data('menu-id');
        $(menuId).toggle();
    });


});
