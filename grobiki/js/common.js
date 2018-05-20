var current = -1;
$(window).on("load", function(){
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .loading-data').fadeOut();
});
$(function(){

    $(".portfolio .cat li").on("click", function(event){
        event.preventDefault();
        var $tab = $(this).data('tab');
        if (current === $tab){
            return;
        }
        current = $tab;
        var $portfolioList = $(".all-portfolio .portfolio-list");
        $portfolioList.hide();
        $portfolioList.each(function(){
            if($(this).data("tab") === $tab){
                $(this).fadeIn();
                console.log(this);
            }
        });

        if($tab === "all"){
            $(".all-portfolio .portfolio-list").each(function(){
                $(this).fadeIn();
            });
        }
    });

    var scene = document.getElementById('cloud-parallax');
    var parallaxInstance = new Parallax(scene);

    /*var $grid = $('.portfolio-list').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });*/

    /*if ($(".isotope_items").length) {
        var r = $(".isotope_items")
            , l = $(".portfolio_filter ul li");
        r.isotope(),
            l.on("click", function() {
                l.removeClass("select-cat"),
                    $(this).addClass("select-cat");
                var o = $(this).attr("data-filter");
                return $(".isotope_items").isotope({
                    filter: o,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }),
                    !1
            })
    }*/


});