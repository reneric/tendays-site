(function() {
	'use strict';

	var slideLock = false;

	// this is so awful and still not working right

	$('.slide-3 .row .frame').on('mouseover', function(e) {
		var $this = $(this),
			siblings = $this.siblings();

		for (var i = 0; i < siblings.length; i++) {
			$(siblings[i]).children('.content').css('opacity', 0);
		}

		if (!slideLock) {
			$this.children('.bg-image').addClass('active');

			setTimeout(function() {
				$this.children('.content').css('opacity', 1);
			}, 200);
		}
		
		slideLock = true;
	});

	$('.slide-3 .row .frame').on('mouseleave', function() {
		var $this = $(this),
			siblings = $this.siblings();

		$this.children('.content').css('opacity', 0);
		$this.children('.bg-image').removeClass('active');

		for (var i = 0; i < siblings.length; i++) {
			$(siblings[i]).children('.content').css('opacity', 0);
		}

		slideLock = false;
	});

	$('.section-slider').flexslider({
		animation:'slide',
		prevText: '',
		nextText: '',
		useCSS:false
	});

	$('.picture-slider').flexslider({
		animation:'slide',
		prevText: '',
		nextText: '',
		useCSS:false,
		controlNav: false
	});

})();