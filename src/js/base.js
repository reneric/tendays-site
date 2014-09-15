(function() {
	'use strict';

	var topNav = $('.topnav'),
		sidebar = $('#sidebar'),
		slides = $('.slide'),
		mainSection = $('.main-section'),
		footer = $('.footer');

	var closeSidebar = function closeSidebar() {
		sidebar.removeClass('show');
		slides.removeClass('pushed');
		topNav.removeClass('pushed');
		mainSection.removeClass('pushed');
		footer.removeClass('pushed');
	};

	$('.navbar-toggle').on('click touchend', function(e) {
		e.preventDefault();

		if (!sidebar.hasClass('show')) {
			sidebar.addClass('show');
			slides.addClass('pushed');
			topNav.addClass('pushed');
			mainSection.addClass('pushed');
			footer.addClass('pushed');
			if ($(window).width() < 1220) {
				$('.navbar .buttons').fadeOut(100);
			}
		} else {
			closeSidebar();
			setTimeout(function() {
				$('.navbar .buttons').fadeIn();
			}, 200);
		}
	});

	$('.close').on('click touchend', function(e) {
		e.preventDefault();
		closeSidebar();
		setTimeout(function() {
			$('.navbar .buttons').fadeIn();
		}, 200);
	});
})();