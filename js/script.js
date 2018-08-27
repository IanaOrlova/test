$(document).ready(function(){

    $('.block-reviews_single-item').slick({
        prevArrow: '<a class="img__arrow_right"><img src="img/img__arrow_right.png"/></a>',
        nextArrow: '<a class="img__arrow_left"><img  src="img/img__arrow_left.png"/></a>',
    });

    $('.menu__button').click(function (e) {
        var target = e.target;
        var menuId = $(target).data('menu-id');
        $(menuId).toggle();
    });


});
