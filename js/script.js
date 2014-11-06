$(function(){

	$('.bxslider').bxSlider({
	});

	$('.bxslider-2').bxSlider({
		maxSlides: 5,
		slideWidth: 146,
		slideMargin: 17,
		moveSlides: 1,
		autoHover: true,
		pause: 2000
	});

	$('.bxslider-3').bxSlider({
		maxSlides: 5,
		slideWidth: 146,
		slideMargin: 17,
		moveSlides: 1,
		autoHover: true,
		pause: 2000
	});

	$('.bxslider-4').bxSlider({
		pagerCustom: '#bx-pager',
		controls: false
	});

	$('.link-modal-catalog').click(function(){
		var c = $('<div class="box-modal" />');
		    c.html($('#modalCatalog').html());
		    $.arcticmodal({
		        content: c
		});
	});

	$('.big-submenu').find('.row-2').height( $('.big-submenu').find('.row-1').height() );

	$('.big-submenu').find('.row-3').height( $('.big-submenu').find('.row-1').height() );

	$('.big-submenu').fadeOut(1);

	$(".cataloge").customScrollbar();

	$('.link-popup').on('click',function(e){
	    e.preventDefault();
	    $('.popup').toggleClass('active');
	});

});