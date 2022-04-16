(function ($) {
    ("use strict");

    //canvas menu activation

    $(".canvas_open").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").addClass("active");
    });

    $(".canvas_close").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").removeClass("active");
    });

    

    //search box toggle
    $(".search_box > a").on("click", function () {
        $(this).toggleClass("active");
        $(".search_widget").slideToggle("medium");
    });

    //mini cart activation
    $(".mini_cart_wrapper > a").on("click", function () {
        if ($(window).width() < 991) {
            $(".mini_cart").slideToggle("medium");
        }
    });

})(jQuery);