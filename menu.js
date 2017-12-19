(function($){
	
$(document).ready(function() {
	$('.left_item li a, .right_item li a').hover(
	function(){$('#menu_picture img').attr('src','images/menu_images/'+$(this).data('img'));},
	function(){$('#menu_picture img').attr('src','images/menu_images/default.png')});
});

$(document).ready(function() {
	if(location.pathname == '/'  || location.pathname == '/index.php' || location.pathname == ''){
		var footerImage = $("#footer .foot-top img:eq(0)");
		var showing = $.cookie('showing_footer') || 1;
		$(window).scroll(function(){
			if (showing == 1 && ($(this).scrollTop() > footerImage.offset().top+footerImage.height()/2 - $(window).height() || $(this).scrollTop() >= ($(document).height()+$(window).height() - 20))) {
				showing = 0;
				$.cookie('showing_footer', showing);
				$(".image-popup").show().css({'top':0}).animate({
					'opacity': 1,
				}, 2000, function(){
					setTimeout(function(){
						$(".image-popup").animate({
							'opacity': 0,
						}, 3000, function(){
							$(".image-popup").hide();
						});
					},1000);
				});
			}
		});
	}
});

}(jQuery));