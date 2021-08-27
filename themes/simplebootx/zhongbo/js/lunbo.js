(function($){
	$.fn.extend({
		DY_scroll: function(options){
			var _this = $(this);	//parent
			_this.each(function(){
				var _this = $(this);
				var ops = $.extend({
					prev: _this.find(".prev"),		//prev
					next: _this.find(".next"),		//next
					list:  _this.find("ul"),		//list
					auto: false,					//autplay
					speed: 4,						//autospeed
					num: 1,							//minlength	
					toggle: true					//isScrollX
				}, options)
				var $li = ops.list.find("li"),
					w = ops.list.find("li").outerWidth(true),
					h = ops.list.find("li").outerHeight(true),
					len = $li.length;
				if(len >= ops.num){
					// click
					if(ops.toggle){
						ops.next.click(function() {
							w = ops.list.find("li").outerWidth(true);
							ops.list.animate({
								"margin-left": -w
							}, function() {
								ops.list.find("li").eq(0).appendTo(ops.list);
								ops.list.css({
									"margin-left": 0
								})
							})
						});
						ops.prev.click(function() {
							w = ops.list.find("li").outerWidth(true);
							ops.list.find("li:last").prependTo(ops.list);
							ops.list.css({
								"margin-left": -w
							});
							ops.list.animate({
								"margin-left": 0
							})
						});
					}else{
						ops.next.click(function() {
							h = ops.list.find("li").outerHeight(true);
							ops.list.animate({
								"margin-top": -h
							}, function() {
								ops.list.find("li").eq(0).appendTo(ops.list);
								ops.list.css({
									"margin-top": 0
								})
							})
						});
						ops.prev.click(function() {
							h = ops.list.find("li").outerHeight(true);
							ops.list.find("li:last").prependTo(ops.list);
							ops.list.css({
								"margin-top": -h
							});
							ops.list.animate({
								"margin-top": 0
							})
						});					
					};
	
					// autoplay
					if(ops.auto) {
						var ad = setInterval(time, ops.speed * 1000);
						
						_this.hover(function() {
							clearInterval(ad)
						}, function() {
							ad = setInterval(time, ops.speed * 1000)
						})
					};
	
					function time(){
						ops.next.click();
					}

					// touch
					if("ontouchstart" in document || $(window).innerWidth() <= 1024){
						var touch = 0,
							touchEnd = 0;
						ops.list[0].addEventListener("touchstart", function(e){
							touch = e.targetTouches[0];						
						});
						ops.list[0].addEventListener("touchend", function(e){
							touchEnd = e.changedTouches[0];
							var totalX = Math.abs(touchEnd.screenX - touch.screenX),
								totalY = Math.abs(touchEnd.screenY - touch.screenY);

							if( totalX > totalY && totalX >= 100){
								if(touchEnd.screenX - touch.screenX > 0){
									ops.prev.click();
								}else{									
									ops.next.click();
								}
							}
							
						});
					}
				}
			})
		}
	})
}($))

 