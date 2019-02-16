
//menu mobile
$(document).ready(function(){
  $('i').click(function(){
    $('.nav-menu').slideToggle(500);
  });
});

//scroll menu fixo
menuFixo = $('.fixed').height();
$(window).on('scroll', function() {
  if($(window).scrollTop() < menuFixo) {
    $('#navbar').removeClass('bg-menu');
    return;
  }
  $('#navbar').addClass('bg-menu');
});

// Mudar tab ao click
$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

//scroll suave interno
$('.nav-menu a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 2000);
});

// Scroll suave para o topo
$('.logo-menu').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 2000)
});

// Mudar para active o menu de acordo com a área
$('.secao-site').each(function(){
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






