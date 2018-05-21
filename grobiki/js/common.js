$(window).on("load", function () {
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .loading-data').fadeOut();
});
$(function () {

    var scene = document.getElementById('cloud-parallax');
    var parallaxInstance = new Parallax(scene);

    /*ISOTOPE*/
    var $container = $('.portfolio-isotope .portfolio-wrapper');
    // filter buttons
    $('#filters li').click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if (!$this.hasClass('is-checked')) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({
            itemSelector: '.item',
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });

    /*map popup*/
    $(".button-map").on("click", function () {
        bootbox.alert("<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6277.27565719008!2d35.136226871158726!3d48.58554232310043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95bbe52ca6cc9%3A0x8730992c13648aa6!2z0LLRg9C70LjRhtGPINCo0L7RgdC10LnQvdCwLCA1Miwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1526892885484\" width=\"99%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
    });
    $(".button-modal").on("click", function(){
        bootbox.alert("");
    });
    $('.nav li a').click(function(){
        $('html, body').animate({scrollTop:$($(this).attr('href')).position().top}, 1000);
    });

});
