var current = -1;
$(window).on("load", function(){
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .loading-data').fadeOut();
});
$(function(){

    $(".portfolio .cat a").on("click", function(event){
        event.preventDefault();
        var $tab = $(this).data('tab');
        if (current === $tab){
            return;
        }

        current = $tab;
        var $portfolioList =$(".all-portfolio .portfolio-list");
        $portfolioList.fadeOut();
        $portfolioList.each(function(){
            if($(this).data("tab") === $tab){
                $(this).fadeIn();
                console.log(this);
            }
        });

        // $portfolioList.fadeOut(500, function () {
        //     $portfolioList.each(function () {
        //         if ($(this).data("tab") === $tab) {
        //             $(this).fadeIn(500);
        //             console.log(this);
        //         }
        //     });
        // });


        if($tab === "all"){
            $(".all-portfolio .portfolio-list").each(function(){
                $(this).fadeIn();
            });
        }
    });
    var scene = document.getElementById('cloud-parallax');
    var parallaxInstance = new Parallax(scene);
});