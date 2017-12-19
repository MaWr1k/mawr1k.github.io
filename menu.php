// GK MooMenu v.2.0 Copyright by GavickPro
window.addEvent("domready", function(){
	// necessary classes
		Fx.Height = Fx.Style.extend({initialize: function(el, options){$(el).setStyle('overflow', 'hidden');this.parent(el, 'height', options);},toggle: function(){var style = this.element.getStyle('height').toInt();return (style > 0) ? this.start(style, 0) : this.start(0, this.element.scrollHeight);},show: function(){return this.set(this.element.scrollHeight);}});
			Fx.Width = Fx.Style.extend({initialize: function(el, options){this.element = $(el);this.element.setStyle('overflow', 'hidden');this.iniWidth = this.element.getStyle('width').toInt();this.parent(this.element, 'width', options);},toggle: function(){var style = this.element.getStyle('width').toInt(); return (style > 0) ? this.start(style, 0) : this.start(0, this.iniWidth);},show: function(){return this.set(this.iniWidth);}});
			Fx.Opacity = Fx.Style.extend({initialize: function(el, options){this.now = 1;this.parent(el, 'opacity', options);},toggle: function(){return (this.now > 0) ? this.start(1, 0) : this.start(0, 1);},show: function(){return this.set(1);}});
	
	var main = $("horiz-menu");
	var levels = new Array();
	var opacityFX = new Array();	var heightFX = new Array();	var widthFX = new Array();	
	main.getChildren().each(function(el,i){
		levels.push(new Array());
		opacityFX.push(new Array());		heightFX.push(new Array());		widthFX.push(new Array());		
		el.getElementsBySelector("ul").each(function(elm,j){
			levels[i].push(elm.getParent());
			opacityFX[i].push(new Fx.Opacity(elm, {duration: 250, transition: Fx.Transitions.linear,wait:true}).set(0));			heightFX[i].push(new Fx.Height(elm, {duration: 250, transition: Fx.Transitions.linear,wait:true}).set(0));			widthFX[i].push(new Fx.Width(elm, {duration: 250, transition: Fx.Transitions.linear,wait:true}).set(0));		});
	});
	
	levels.each(function(e,k){
		e.each(function(a,l){
			a.addEvents({
				"mouseenter" : function(){
					a.getChildren()[1].setStyle("overflow","hidden");
					if(window.ie7 && (a.getChildren()[1].getParent() && a.getChildren()[1].getParent().getParent() && a.getChildren()[1].getParent().getParent().getParent() && a.getChildren()[1].getParent().getParent().getParent().hasClass("level1")) && a.getChildren()[1].getStyle("position") != 'absolute') a.getChildren()[1].setStyle("margin-top","35px");
					a.getChildren()[1].setStyle("position","absolute");
					opacityFX[k][l].toggle();					heightFX[k][l].toggle();					widthFX[k][l].toggle();					(function(){a.getChildren()[1].setStyle("overflow","")}).delay(250);
				},
				"mouseleave" : function(){
					a.getChildren()[1].setStyle("overflow","hidden");
					opacityFX[k][l].stop().set(0);					heightFX[k][l].stop().set(0);					widthFX[k][l].stop().set(0);				}
			});
		});
	});	
	// submenu activation
	/*$ES('li.level1','#horiz-menu').each(function(el){
		if(($E('.active',el) || el.hasClass('active')) && $E('ul', el)){
			$E('ul', el).setStyle("display", "block");
			$ES('li.level1','#horiz-menu').each(function(elm){
				elm.addEvent("mouseenter", function(){
					if(elm != el){
						if(!window.ie) $E('ul', el).setProperty("style","");
						else $E('ul', el).removeProperty("style");
					} 
				});
				
				elm.addEvent("mouseleave", function(){
					if(elm != el){
						$E('ul', el).setStyle("display","block");
					} 
				});
			});
		}
	});*/
});