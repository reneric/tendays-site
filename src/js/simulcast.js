(function() {
	'use strict';

	var clock = $('.clock').countdown({
		date: "October 7, 2014 15:03:26",
		render: function(data) {
			var el = $(this.el),
				date = {
					days: data.days.toString().split(''),
					hours: data.hours.toString().split(''),
					minutes: data.min.toString().split(''),
					seconds: data.sec.toString().split('')
				};

			for (var timeEl in date) {
				if (date[timeEl].length !== 2) {
					date[timeEl].splice(0, 0, 0);
				}
			}

			el.empty()
				.append("<div class=\"time-group days\">" + "<div class=\"time-el\">" +  date.days[0] + "</div>" + "<div class=\"time-el\">" +  date.days[1] + "</div></div>")
				.append("<div class=\"dots\"><div class=\"top-dot\"></div><div class=\"bottom-dot\"></div>")
				.append("<div class=\"time-group hours\">" + "<div class=\"time-el\">" +  date.hours[0] + "</div>" + "<div class=\"time-el\">" +  date.hours[1] + "</div></div>")
				.append("<div class=\"dots\"><div class=\"top-dot\"></div><div class=\"bottom-dot\"></div>")
				.append("<div class=\"time-group minutes\">" + "<div class=\"time-el\">" +  date.minutes[0] + "</div>" + "<div class=\"time-el\">" +  date.minutes[1] + "</div></div>")
				.append("<div class=\"dots\"><div class=\"top-dot\"></div><div class=\"bottom-dot\"></div>")
				.append("<div class=\"time-group seconds\">" + "<div class=\"time-el\">" +  date.seconds[0] + "</div>" + "<div class=\"time-el\">" +  date.seconds[1] + "</div></div>");
		}
	});
})();