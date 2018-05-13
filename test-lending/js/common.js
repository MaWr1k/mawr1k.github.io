
$(function () {
    "use strict";
    $('#main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    var $sliderText = $('.rev__slider-text');
    $sliderText.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
        fade: true,
        draggable: false,
        asNavFor: '.rev__slider-list'
    });
    var $slideList = $('.rev__slider-list');
    $slideList.slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        draggable: false,
        asNavFor: '.rev__slider-text',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    infinite: true,
                    centerPadding: '0px',
                    centerMode: true
                }
            }]
    });

    if($(window).width() > 700){
        $slideList.find('.rev__slider-list__item').removeClass("slick-current");
        $slideList.find('.active').addClass("slick-current");
    }
    var $formFields = $('.form form input');
    function checkForm($formFields) {
        var error = 2;
        $formFields.each(function () {
            var successHtml = '<span class="success">&#10004;</span>';
            $(this).parent().find('span.success').remove();
            if (this.className === "form__phone" && this.value.length === 14) {
                $(this).after(successHtml);
                error -= 1;
            }
            if (this.className === "form__name" && this.value.length >= 3) {
                $(this).after(successHtml);
                error -= 1;
            }
        });
        return error;
    }
    $formFields.on("input", function () {
        checkForm($formFields);
    });
    $('.form button.button').on('click', function (event) {
        event.preventDefault();
        var error = checkForm($(this).parent().find("input"));
        if (error === 0) {
            swal("", "Ваша заявка принята!", "success");
        } else {
            swal("", "Заполните обязательные поля!", "error");
        }
    });
    $('#phone').mask('(999) 999-9999');
    $('header .menu ul').slicknav({
        label:''
    });
    $('.next-block').on('click', function(){
        $("html, body").animate({
            scrollTop: $("section.advantage").offset().top
        },{
            duration: 1000,
            easing: "swing"
        });
    });




});