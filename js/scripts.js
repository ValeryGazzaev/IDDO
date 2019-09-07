jQuery(document).ready(function(){
	$('.header-top .menu-btn').click(function(){
		$(this).next('div').slideToggle('fast')
	});
});

jQuery(document).ready(function(){
	$('.text-dd-blocks .about-sub-title').eq(2).addClass('active');
	$('.text-dd-blocks .slide-p').eq(2).show();
	$('.about-sub-title').click(function(){
		$(this).next('p').slideToggle('slow')	
		.siblings('.slide-p:visible').slideUp("slow");	
		$(this).toggleClass('active');
		$(this).siblings('.about-sub-title').removeClass('active');
	});
});
