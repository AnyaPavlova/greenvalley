$(document).ready(function(){

	/*Большая фотогалерея с большой превьюшкой при клике*/
 $('#photogallery-main-thumbs').owlCarousel({
 	items: 6,
 	center:true,
 	loop:true,
 	dots: false,
 	responsive: {
 		0: { items:1},
 		500: { items:6 },
 		992: { items:6 }
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
	 	dots: false,
	 	URLhashListener:true,
        startPosition: 'family'
 	});

	$('.promo-type-slider__link').on('click', function() {
		$('.promo-type-slider__link').removeClass('promo-type-slider__link--active'); //отключаем везде
		$(this).addClass('promo-type-slider__link--active'); //включаем только на том, куда кликнули
	});

	/*Карусель с отзывами*/	
	$('#reviews-carousel-thumbs').owlCarousel({ 		
 	nav:true,
 	navText:['',''],
 	loop:true, 
 	dots: false,	
 	margin:20,
 	responsive: {
 		0: { 
 			items:1, 
 			nav:false,
 			nestedItemSelector: 'reviews-item',
 			autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true
 		},
 		500: { 
 			items:1, 
 			nav:false, 
 			autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true
 		},
 		992: { items:1 }
 	}
 	});

 	/*Карусель с акциями*/
 	 $('#stock-carousel-thumbs').owlCarousel({
	 	items: 1,
	 	center:true,
	 	loop:true,
	 	dots: true,
 	});

 	 /*присваиваем новый класс, если url room-list.html*/
 	 if (window.location.pathname == '/room-list.html')	{
		$('.main-nav__link--active').addClass('main-nav__link--active-level1');
	}
	if (window.location.pathname == '/single-room.html')	{
		$('.main-nav__link--active').addClass('main-nav__link--active-level2');
	}
	if (window.location.pathname == '/form.html')	{
		$('a').removeClass('main-nav__link--active');
	}

	/*Карусель для одиночного номера*/
	$('#photo-carousel-thumbs').owlCarousel({
 	items: 1, 	
 	nav:true,
 	navText:['',''],
 	loop:true, 
 	dots: false,	
 	responsive: {
 		0: { 
 			nav:false,
 		},
 		500: { 
 			nav:true,
 		},
 		992: { 
 			nav:true,
 		}
 	}
 	});	

 	/*Открытие больших фоток*/
	$(".photo-carousel__item").fancybox({
	  maxWidth  : '100%',
	  fitToView : false,
	  autoSize  : false,
	  closeClick  : false,
	  openEffect  : 'none',
	  closeEffect : 'none'
	});

	/*Бургер*/
	$('#burger').on('click', function(e){
		e.preventDefault();		
		$('.main-nav__burger').toggleClass('main-nav__burger--close');
		$('.main-nav__list').toggleClass('nav--visible');
	});

	/*Карусель для нижнего блока в номере*/	
	$('#accommodation-thumbs').owlCarousel({ 
 	loop:true, 
 	dots: false,	 	
 	responsive: {
 		0: { 
 			items:1, 			
 			autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    margin:20,
 		},
 		500: { 
 			items:2, 
 			dots: true,
 			autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    margin:20,
 		},
 		992: { 
 			items:3,
 			margin:10,
 		}
 	}
 	});

 	/*Календарик*/
 	$( "#date-picker" ).datepicker({
		dateFormat: "dd      mm      yy",
		hangeMonth:true,
	});
	$( "#date-picker-end" ).datepicker({
		dateFormat: "dd      mm      yy", 
		hangeMonth:true,
	});

	//Виджет с переключение вкладок
	$( "#type-cottage-tabs" ).tabs({
    	heightStyle: "auto",
    	collapsible:true,
    	active: false,
  	});
	/*при клике на табе, делаем чек-бокс активным*/
  	$('.type-cottage__type').on('click', function(e){
  		e.preventDefault();
		$(this).find('.type-cottage__radio').prop('checked', true);

		$('.type-cottage__type').removeClass('arrow');
		$(this).addClass('arrow');
	});

});

