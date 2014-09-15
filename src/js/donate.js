(function() {
	'use strict';

	var displayedDollarValue = $('.current-donation .number .value'),
		displayedYearValue = $('.current-donation .form-message .year');

	var processValuesAndSetDisplayInformation = function processValuesAndSetDisplayInformation(str) {
		var yearStr = null,
			dollarStr = null;

		var processValues = function processValues(str) {
			var dollarInt = parseInt(str, 10);

			if (isNaN(dollarInt)) {
				return false;
			}

			dollarStr = dollarInt + '.00';

			// Taking account for IEEE-754
			yearStr = ((dollarInt * 100) * 0.2) / 100;

			return true;
		};

		var setDisplayInformation = function setDisplayInformation(ystr, dstr) {
			displayedDollarValue.html(dstr);
			displayedYearValue.html(ystr);
		};

		if (processValues(str)) {
			setDisplayInformation(yearStr, dollarStr);
		} else {
			throw new Error('An invalid value was passed to the processValues function.');
		}
	};

	$('#pledge-value').on('change', function() {
		processValuesAndSetDisplayInformation($(this).val());
	});

	$('#pledge-submit').on('click', function(e) {
		$('#payment-info').modal();
		e.preventDefault();
	});

	$('.modal-body form input').on('focus', function(e) {
		$(this).css('opacity', 1).parent().addClass('active');
		e.preventDefault();
	});

	$('.modal-body form input').on('blur', function(e) {
		$(this).css('opacity', 0.4).parent().removeClass('active');
		e.preventDefault();
	});
})();