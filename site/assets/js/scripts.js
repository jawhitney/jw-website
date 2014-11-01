(function($) {
	$(document).ready(function () {
		$('.navbar a').not('.navbar-brand').on('click', function(e) {
			e.preventDefault();

			var section = $(this).data('section'),
				sectionData = data[section.toLowerCase()],
				sectionContent = $('#section' + section + ' .content'); 

			if (sectionData && sectionContent !== '') {
				var templateScript = $('#template' + section).html(),
					template = Handlebars.compile(templateScript);

				$('#section' + section + ' .content').html(template(sectionData));

				if (RetinaImage !== undefined) {
				    $('#section' + section + ' .content').find('img').each(function() {
				        new RetinaImage(this);
				    });
				}
			}

			$('.wrapper').each(function() {
				$(this).hide();
			});

			$('.nav li.active').removeClass('active');
			$('#section' + section).fadeIn();
			$('#link' + section).addClass('active');

			if ($('.navbar-toggle').is(":visible")) { 
				$('.navbar-collapse').collapse('toggle');
			}
		});
	});
})(jQuery);

Handlebars.registerHelper('link', function(url, text, description) {
    var text = Handlebars.Utils.escapeExpression(text),
        url = Handlebars.Utils.escapeExpression(url),
  		description  = Handlebars.Utils.escapeExpression(description),
  		result = '<a href="' + url + '" target="_blank">' + text + '</a>: ' + description;

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('stars', function(rating) {
    var rating = Handlebars.Utils.escapeExpression(rating),
  		result = '';

    for (var i = 1; i <= rating; i++) {
		result += '<span class="glyphicon glyphicon-star set"></span>';
	}

	for (var i = 1; i <= 5 - rating; i++) {
		result += '<span class="glyphicon glyphicon-star"></span>';
	}

    return new Handlebars.SafeString(result);
});
