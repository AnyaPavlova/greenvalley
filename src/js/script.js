$(document).ready(function(){

	/*Большая фотогалерея с большой превьюшкой при клике*/
 $('#photogallery-main-thumbs').owlCarousel({
 	items: 6,
 	center:true,
 	loop:true,
 	responsive: {
 		0: { items:2},
 		768: { items:4 },
 		1200: { items:6 }
 	}
 });
	$('#photogallery-main-thumbs a').on('click', function(e){
		e.preventDefault();
		var mainImageUrl = $(this).attr('href');
		$('#photogallery-main-main-img').attr('src', mainImageUrl);
	});

	/*Большая галерея на первом экране*/	
	 $('#promo-type-slider-thumbs').owlCarousel({
	 	items: 1,
	 	center:true,
	 	loop:true,
	 	URLhashListener:true,
        startPosition: 'family'
 	});

	$('.promo-type-slider__link').on('click', function() {
		$('.promo-type-slider__link').removeClass('promo-type-slider__link--active'); //отключаем везде
		$(this).addClass('promo-type-slider__link--active'); //включаем только на том, куда кликнули
	});

	/*Карусель с отзывами*/	
	$('#reviews-carousel-thumbs').owlCarousel({
 	items: 2, 	
 	nav:true,
 	navText:['',''],
 	loop:true, 	
 	margin:20,
 	responsive: {
 		0: { items:1},
 		768: { items:2 },
 		1200: { items:2 }
 	}
 	});

});
