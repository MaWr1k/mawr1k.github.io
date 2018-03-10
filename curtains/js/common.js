$(function () {
    $('.portfolio__our-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3/*,
                    centerPadding: '60px'*/
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:false,
                    autoplay:true,
                    autoplaySpeed: 2000,
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.triple-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows:false
                }
            }
        ]
    });

});
