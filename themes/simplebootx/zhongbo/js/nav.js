(function () {
	var s = true,
		n = $('.menubtn'),
		e = $('<div/>').css({
			position: 'fixed',
			display: 'none',
			width: '100%',
			height: '100%',
			top: '0',
			left: '0',
			background: 'rgba(0,0,0,.5)',
			'z-index': '999998',
		});
	$('body').prepend(e);
	n.click(function () {
		if (s) {
			$('.nav')
				.css('height', '100%')
				.slideDown(300, function () {
					$('.nav ul').slideDown(400);
				});
			n.css({ transform: 'rotate(90deg)' })
				.find('span')
				.css({ 'background-color': '#fff' });
			s = false;
			e.fadeIn(600);
			$('body').css({ overflow: 'hidden' });
		} else {
			i();
			$;
		}
	});
	e.click(function () {
		i();
	});
	var i = function () {
		n.css({ transform: 'rotate(0)' })
			.find('span')
			.css({ 'background-color': '#fff' });
		$('.nav').slideUp(300).css('height', '0');
		$('.nav ul').hide(400);
		s = true;
		e.fadeOut(600);
		$('body').css({ overflow: 'auto' });
	};
})();
$('.wap-nav .nav ul li > .addition').click(function (s) {
	s.stopPropagation();
	if ($(this).next('.c-show1').css('display') == 'none') {
		$(this).next('.c-show1').slideDown(500);
		$(this)
			.css('background', "transparent url('/yizi.png') no-repeat center center")
			.css('background-size', '100% 100%;');
	} else {
		$(this).next('.c-show1').slideUp(500);
		$(this)
			.css(
				'background',
				"transparent url('/shizi.png') no-repeat center center"
			)
			.css('background-size', '100% 100%;');
	}
});
$('.wap-nav .nav ul li .c-show1 .c-s1 > .addition').click(function (s) {
	s.stopPropagation();
	if ($(this).next('.c-show2').css('display') == 'none') {
		$(this).next('.c-show2').slideDown(500);
		$(this)
			.css('background', "transparent url('/yizi.png') no-repeat center center")
			.css('background-size', '100% 100%;');
	} else {
		$(this).next('.c-show2').slideUp(500);
		$(this)
			.css(
				'background',
				"transparent url('/shizi.png') no-repeat center center"
			)
			.css('background-size', '100% 100%;');
	}
});
$('.wap-nav .nav ul li .c-show1 .c-s2 .addition').click(function (s) {
	s.stopPropagation();
	if ($(this).next('.c-show3').css('display') == 'none') {
		$(this).next('.c-show3').slideDown(500);
		$(this)
			.css('background', "transparent url('/yizi.png') no-repeat center center")
			.css('background-size', '100% 100%;');
	} else {
		$(this).next('.c-show3').slideUp(500);
		$(this)
			.css(
				'background',
				"transparent url('/shizi.png') no-repeat center center"
			)
			.css('background-size', '100% 100%;');
	}
});
$('.wap-nav .nav ul li .c-show1 .c-s3 .addition').click(function (s) {
	s.stopPropagation();
	if ($(this).next('.c-show4').css('display') == 'none') {
		$(this).next('.c-show4').slideDown(500);
		$(this)
			.css('background', "transparent url('/yizi.png') no-repeat center center")
			.css('background-size', '100% 100%;');
	} else {
		$(this).next('.c-show4').slideUp(500);
		$(this)
			.css(
				'background',
				"transparent url('/shizi.png') no-repeat center center"
			)
			.css('background-size', '100% 100%;');
	}
});
// $('.wap-nav .nav > ul').height($(window).height(500));
