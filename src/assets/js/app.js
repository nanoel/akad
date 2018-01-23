//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap/transition.js
//=require javascripts/bootstrap/collapse.js
//=require javascripts/bootstrap/tab.js

// require javascripts/bootstrap.min.js

//=require slick.min.js
//=require map.js
//=require libs/isotope.pkgd.min.js


;(function($){

	$(document).ready(function(){
		var $slider = $('.ba-slider');

		$slider.slick({
			autoplay: true,
			autoplaySpeed: 2500,
			arrows: false,
			dots: true,
			slide: '.ba-slide'
		});
	});





	var worksGrid = $('.ba-portfolio');

	$(window).on('load', function(){

		worksGrid.isotope({
	        	  // options
	        	  itemSelector: '.ba-portfolio__item',
	        	  procentPosition: true,
	        	  masonry:{
	        	  	columnWidth: '.ba-portfolio__item',
	        	  }
	        	  // layoutMode: 'fitRows'
	        	});


	        	// filter items on button click
	        	$('.ba-portfolio-filter').on( 'click', '[data-filter]', function(e) {
	        		e.preventDefault();
	        		var filterValue = $(this).data('filter');
	        		worksGrid.isotope({ filter: filterValue });
	        		$('.ba-active[data-filter]').removeClass('ba-active');
	        		$(this).addClass('ba-active');
	        	});

	        });

	    })(jQuery);





















