$(function () {
    $(".contact__form .button").on('click', function () {
        event.preventDefault();
        var msg = $('.contact__form form').serialize();

        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: msg,
            success: function (data) {
                /*$('#results').html(data);*/
                swal(data);
            },
            error: function (xhr, str) {
                swal('Error: ' + xhr.responseCode);
            }
        });
    });

    $('.menu__main').slicknav({
        prependTo: '#mobile',
        label: ''
    });
    var $page = $('html, body');
    $("#up, .to-top").click(function () {
        $page.animate({scrollTop: 0}, 1500)
    });

    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});