/*progress bar - estudar melhor a respeito*/
const bar = document.querySelectorAll('.progress-bar');
bar.forEach((bar,i) => {
  setTimeout(() => 
             {

    bar.classList.remove("inactive");

  }, i 
             * 200);

});


/*jquery*/

//scroll suave interno
$('.nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.scroll').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 2000);
});

// Mudar para active o menu de acordo com a área
$('.secao').each(function(){
	var height = $(this).height(),
			offsetTop = $(this).offset().top,
			menuHeight = 10,
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

