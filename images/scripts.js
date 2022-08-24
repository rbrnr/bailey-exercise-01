
$(function (){
    $('.scrollMe').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top - 50
        }, {
            duration: 370,
            easing: "linear"
        });

        return false;
    });

    if ($(window).width() > 767) {
        $(document).on("scroll resize", function () {

            let target = $('#section-4 .tab-content');
            let mainController = $('#section-4 .pills-container');

            let customSlider = $('#section-6');

            let targetTop = $(target).offset().top ;
            let customSliderTop = $(customSlider).offset().top;

            if ($(window).scrollTop() > targetTop - 40 ) {
                mainController.addClass("static");
                mainController.addClass("blure");
            }

            if ($(window).scrollTop() > customSliderTop - 500) {
                mainController.addClass("oppacity");
            }

            else if ($(window).scrollTop() < targetTop - 40) {
                mainController.removeClass("static");
                mainController.removeClass("blure");
            }

            else if ($(window).scrollTop() < customSliderTop) {
                mainController.removeClass("oppacity");

            }
        });

        $('#section-4 .nav-link').bind('click.smoothscroll' , function() {
            let $window = $(window);
            let target = $('#section-4 .tab-content');
            let targetTop = $(target).offset().top ;

            let bl_top = target.offset().top;
            $('body, html').animate({scrollTop: bl_top - 250} , 300);
        });
    }
    $('[data-bs-toggle="tooltip"]').click(function (){
       return false;
    });
    $('[data-bs-toggle="tooltip"]').hover(function (){
        $(this).children('img').addClass('active');
    }, function (){
        $(this).children('img').removeClass('active');
    });
});

if ($(window).width() > 991) {
    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       0
        }
    );
    wow.init();
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})