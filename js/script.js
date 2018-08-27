$(document).ready(function(){

    $('.block-reviews_single-item').slick({
        prevArrow: '<img class="img__arrow_right" src="../img/img__arrow_right.png"/>',
        nextArrow: '<img class="img__arrow_left" src="../img/img__arrow_left.png"/>',
    });

    $('.menu__button').click(function (e) {
        var target = e.target;
        var menuId = $(target).data('menu-id');
        $(menuId).toggle();
    });


});
