$('.slide_button').click(function(){
	$('.site-sections-bar-background').slideToggle();
});

$(window).resize(function(){
	if ($(window).outerWidth() > 991){
		$('.site-sections-bar-background').attr('style', '');
	}
});

$('.plate').click(function(){
	$('.plate').removeClass('active');
	$('.advantages_popup, .plate-img').removeClass('active');
	$(this).addClass('active');
	$(this).find('.advantages_popup, .plate-img').addClass('active');
});

$(document).on('click', function(e){
	if(!$(e.target).closest('.plate').length){
		$('.plate').removeClass('active');
		$('.advantages_popup, .plate-img').removeClass('active');
	}
});

$('.nav-button-callback').click(function(){
	if(!$('.order_call_popup').hasClass('active')) {
		$('.order_call_popup, .opacity-substrate').addClass('active');
	}
});

$('.order_call_popup .closing-cross').click(function(){
	$('.order_call_popup, .opacity-substrate').removeClass('active');
});




