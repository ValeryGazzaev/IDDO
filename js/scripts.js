jQuery(document).ready(function(){
	$('.header-top .menu-btn').click(function(){
		$(this).next('div').slideToggle('fast')
	});
});

jQuery(document).ready(function(){
	$('.text-dd-blocks .about-sub-title').addClass('active');
	$('.text-dd-blocks .slide-p').hide();
	$('.text-dd-blocks .slide-p').eq(0).show();
	$('.about-sub-title').click(function(){
		$(this).next('p').slideDown(400)	
		.siblings('.slide-p:visible').slideUp(400);	
		$(this).toggleClass('active');
		$(this).siblings('.about-sub-title').removeClass('active');
	});
});
