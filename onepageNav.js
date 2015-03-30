(function( $ ) {
	
	$.fn.onePgaeNav = function( options ){

		var settings = $.extend({
			wrapper		:'', 		// Nav Wrapper
			speed 		: 900,		// animation speed
			initRange 	: 0			// left pixel from every section top
		}, options ),
		$that = $(this);

		$(this).on( 'click' , clickScroll );

		if (settings.wrapper) {
			$(window).on('scroll',function(){
				var sectionTop 	= [],
				windowTop 	= $(window).scrollTop();

				$that.each(function(){
					var hash = $(this).attr('href'),
						hashOffset = $( hash ).offset();
					if (typeof hashOffset !== 'undefined' ) {
						sectionTop.push( hashOffset.top);
					};
				});

				$.each( sectionTop, function(index){
					if ( windowTop > sectionTop[index] - settings.initRange ){
						$that.removeClass('active')
							.eq(index).addClass('active');
					}
				});
			});
		};

		function clickScroll(event){
			event.preventDefault();

			var hash 		= $(this).attr('href'),
				hashOffset 	= $(hash).offset(),
				hashTop 	= hashOffset.top;

			$('html, body').animate({
				scrollTop: hashTop - settings.initRange
			}, settings.speed);
		}

	};

}(jQuery));