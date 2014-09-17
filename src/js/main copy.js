(function() {
	'use strict';

	var slide6Images = $('.progress-report .progress-item'),
		pagination = $('.onepage-pagination'),
		meet_people = $('.profile');

	var showSlide6Images = function showSlide6Images() {
		var imgLen = slide6Images.length,
			imgIndex = 0;

		var showDiv = function showDiv() {
			$(slide6Images[imgIndex]).css('opacity', 1);

			if (imgIndex < imgLen) {
				imgIndex++;
				setTimeout(showDiv.bind(this), 800);
			}
		};

		showDiv();
	};

	if ($(window).height() >= 460) {
		$('#main').onepage_scroll({
			responsiveFallback:500,
			beforeMove: function(index) {
				//console.log(index);

				setTimeout(function() {
					if ($('.slide-1').hasClass('active')) {
						$('.topnav').css('top', '');
					}	 
				}, 200);
			},
			afterMove: function(index, nextIndex) {
				//console.log(index);
				if (index === 1) {
					$('.topnav').css('top', '-1px');
					$('.firstnav').css('opacity', 0);
				} else if (index === 3 || index === 5) {
  				$('.onepage-pagination').addClass('dark');
				} else {
  				$('.onepage-pagination').removeClass('dark');
				}
				

				setTimeout(function() {
					if ($('.slide-1').hasClass('active')) {
						$('.firstnav').css('opacity', 1);
					}
				}, 200);

				if (nextIndex === 6 || index === 5) {
					showSlide6Images();
				}

			}
		});

		$('html').removeClass('no-one-page-body');
		$('body').removeClass('no-one-page-body');
		$('.slide').removeClass('no-one-page');
	} else {
		$('html').css('overflow', 'initial');
		//$('.topnav').css('display', 'none');
		$(window).scroll(function(e) {
			if ($(window).scrollTop() > 380) {
				$('.firstnav').css('position', 'fixed').css('bottom','initial').css('top', '0');
			} else if ($(window).scrollTop() < 380) {
				$('.firstnav').css('position', 'absolute').css('bottom', '0').css('top', 'initial');
			}
		});
	}
	var oldVal = 0,
		pendingVal = 0;

	$('.slider').slider({
		range: 'min',
		slide: function(event, ui) {
			var setDrinkData = function setDrinkData(drinkInt) {
				$('.slide-4 .ui-slider-handle').attr('data-amount', drinkInt.toString());
				$('.beverage-num').html(drinkInt.toString());

				var giveInt = Math.floor((drinkInt * 146) / 30).toString();

				$('.months-num').html(giveInt);
				$('.give-int').html(giveInt);

				if (drinkInt > oldVal) {
					for (var i = 1; i <= drinkInt; i++) {
						var currentDrink = 'drink-' + i,
						nextDrink = 'drink-' + (i + 1);

						$('.' + currentDrink).attr('class', currentDrink + ' active');
						$('.' + nextDrink).attr('class', nextDrink);
					}
				} else {
					for (var i = oldVal; i > drinkInt; i--) {
						var currentDrink = 'drink-' + i,
						nextDrink = 'drink-' + (i + 1);

						$('.' + currentDrink).attr('class', currentDrink);
					}
				}
				
				if (drinkInt === 1) {
					$('.drink-2').attr('class', 'drink-2');
					return 0;
				} else if (drinkInt === 7) {
					$('.drink-7').attr('class', 'drink-7 active');
					return 0;
				}

			};

			if (ui.value > 92) {
				pendingVal = 7;
			} else if (ui.value > 80) {
				pendingVal = 6;
			} else if (ui.value > 64) {
				pendingVal = 5;
			} else if (ui.value > 48) {
				pendingVal = 4;
			} else if (ui.value > 32) {
				pendingVal = 3;
			} else if (ui.value > 16) {
				pendingVal = 2;
			} else {
				pendingVal = 1;
			}

			setDrinkData(pendingVal);
			oldVal = pendingVal;
		}
	});

	$('.slide-2 .navbar button').on('click touchend', function() {
		$('#navbar-collapse-1').collapse('toggle');
	});

	$('.slide-3 .profile').on('mouseenter', function(e) {
		e.preventDefault();

		if (!Modernizr.touch) {
			$(this).children('.overlay').css('opacity', '0');
		}
	});

	$('.slide-3 .profile').on('mouseleave', function(e) {
		e.preventDefault();
		if (!Modernizr.touch) {
			$(this).children('.overlay').css('opacity', '0.5');
		}
	});

	$('.fade-in').on('mouseenter touchend', function(e) {
		e.preventDefault();
		var $this = $(this);

		if (e.type === 'touchend') {
			location.href = $this.data('location');
			return;
		}

		$this.animate({'opacity': '1'});
	});

	$('.fade-in').on('mouseleave touchend', function(e) {
		e.preventDefault();
		$(this).css('opacity', '0');
	});

	$('.slide-2 input').on('focus', function(e) {
		$(this).parent().css('opacity', 1).addClass('active');
		e.preventDefault();
	});

	$('.slide-2 input').on('blur', function(e) {
		$(this).parent().css('opacity', 0.3).removeClass('active');
		e.preventDefault();
	});

	meet_people.on('mouseenter', function(e) {
		var videoElm = $(this).children('.video-js'),
			video = videojs(videoElm.attr('id'));
			video.play();
			videoElm.animate({'opacity': '1'}, 1800);
	});
	
	meet_people.on('mouseleave', function(e) {
		var videoElm = $(this).children('.video-js'),
			video = videojs(videoElm.attr('id'));
      video.pause();
	});
	 
  var videoRatio = 334 / 593; //Video originalHeight divided be video originalWidth

  function myPlayer_followBrowsersize() {
      var vidWrapperHeight = meet_people.height();
      var vidWrapperWidth = meet_people.width();
      var actualVideoHeight = videoRatio * vidWrapperWidth;
      
      var videoTestRatio = vidWrapperHeight - actualVideoHeight;
      console.log(videoTestRatio);
      
      if (videoTestRatio > 0 && videoTestRatio < 80) {
          meet_people.find('.video-js').css({'width':'120%','left':'-10%'});
      } 
      else if (videoTestRatio > 80){ 
        meet_people.find('.video-js').css({'width':'140%','left':'-20%'});
      } 
      else {
          meet_people.find('.video-js').css({'width':'100%','left':'0'});
      }
  }
  setTimeout(function(){
  	  // myPlayer_followBrowsersize();             
  },1000);
  
  //$(window).bind('resize', myPlayer_followBrowsersize);
	

	$('.slide-4 .ui-slider-handle').attr('data-amount', '1');

})();
