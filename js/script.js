$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".burger-menu").toggleClass("burger-menu__active");
        $(".nav-header__menu").toggleClass("menu-active");
        $("body").toggleClass("block-body");
    })
});

$(".express-window__items").click(function () {
    $(".express-window__items").removeClass("express-window__active-items");
    $(this).addClass("express-window__active-items");
})

