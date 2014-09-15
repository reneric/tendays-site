(function() {
	'use strict';

	$('.menu li a').on('click', function(e) {
		var $this = $(this),
			viewType = $this.data('view');

		$this.parents('ul').find('a').removeClass('active');
		$this.addClass('active');

		if (viewType === 'digital') {
			$('.digital').fadeIn();
			$('.print').fadeOut();
		} else if (viewType === 'print') {
			$('.print').fadeIn();
			$('.digital').fadeOut();
		} else {
			$('.download-group').fadeIn();
		}

		e.preventDefault();
	});
})();