window.addEvent("load",function(){
	if($ES('.users_wrap')){
 		$ES('.users_wrap').each(function(el){
		 	if($ES('div.moduletable', el).length > 0){
 				var max = 0;
				$ES('div.moduletable', el).each(function(el){ if(el.getSize().size.y > max) max = el.getSize().size.y; });
				$ES('div.moduletable', el).each(function(el){ el.setStyle("height", max+"px"); });
			}	
 		});
	} 
	
	$$("#jwscroller-inner img").setStyle("border","none");
});