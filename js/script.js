$(function(){

	$('.bxslider').bxSlider({
		auto: true,
	});

	$('.bxslider-2').bxSlider({
		maxSlides: 5,
		slideWidth: 146,
		slideMargin: 17,
		moveSlides: 1,
		auto: true,
		autoHover: true,
		pause: 2000
	});

	$('.bxslider-3').bxSlider({
		maxSlides: 5,
		slideWidth: 146,
		slideMargin: 17,
		moveSlides: 1,
		auto: true,
		autoHover: true,
		pause: 2000
	});

	$('.link-modal-catalog').click(function(){
		var c = $('<div class="box-modal" />');
		    c.html($('#modalCatalog').html());
		    $.arcticmodal({
		        content: c
		});
	});	

});