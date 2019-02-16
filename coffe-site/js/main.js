var $target = $('.anime'),
		animationClass = 'anime-init',
		offset = $(window).height() * 3/4;

function animeScroll() {
	var documentTop = $(document).scrollTop();
	
	$target.each(function(){
		var itemTop = $(this).offset().top;
		if (documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	});
}

animeScroll();

$(document).scroll(function(){
	animeScroll();
});


$('.nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 1500);
});

$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 1500)
});

$('.secao').each(function(){
	var height = $(this).height(),
			offsetTop = $(this).offset().top,
			menuHeight = $('.menu').innerHeight(),
			id = $(this).attr('id'),
			$itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	});
});

//$('.mobile-btn').click(function(){
//	$(this).toggleClass('active');
//	$('.mobile-menu').toggleClass('active');
//});



/*$(window).scroll(function() {
	var windowTop = $(this).scrollTop(),
        offset = $(window).height() * 3/4;
	$('.anime').each(function(){
		if(windowTop > $(this).offset().top - offset) {
			$(this).addClass('anime-init');
		} else {
			$(this).removeClass('anime-init');
		}
	});
});*/