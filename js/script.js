$(document).ready(function(){

    $('.block-reviews_single-item').slick({
        prevArrow: '<div class="img__arrow_right"><a><img src="img/img__arrow_right.png"/></a></div>',
        nextArrow: '<div class="img__arrow_left"><a><img  src="img/img__arrow_left.png"/></a></div>',
    });

    $('.menu__button').click(function (e) {
        var target = e.target;
        var menuId = $(target).data('menu-id');
        $(menuId).toggle();
    });


});
