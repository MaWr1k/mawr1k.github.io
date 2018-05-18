var current = -1;
$(function(){
    $(".portfolio .cat a").on("click", function(event){
        event.preventDefault();
        var $tab = $(this).data('tab');
        if (current == $tab){
            return;
        }
        if($tab === "all"){
            $(".all-portfolio .portfolio-list").each(function(){
                $(this).fadeIn();
            });
        }
        current = $tab;
        $(".all-portfolio .portfolio-list").hide();
        $(".all-portfolio .portfolio-list").each(function(){
            if($(this).data("tab") === $tab){
                $(this).fadeIn(500);
            }
        });
    });
});