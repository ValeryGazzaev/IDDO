jQuery(document).ready(function(){
	$('.header-top .menu-btn').click(function(){
		$(this).next('div').slideToggle('fast')
	});
});