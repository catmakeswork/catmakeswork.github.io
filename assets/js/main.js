/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function ($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

		var eye = $(".eye");

		eye.css({
			'-webkit-transform': 'rotate(' + -90 + 'deg)',
			'-moz-transform': 'rotate(' + -90 + 'deg)',
			'-ms-transform': 'rotate(' + -90 + 'deg)',
			'transform': 'rotate(' + -90 + 'deg)'
		});


		$('body').mousemove(function (event) {
			console.log('eye', eye)
			var x = (eye.offset().left) + (eye.width() / 2);
			var y = (eye.offset().top) + (eye.height() / 2);
			var rad = Math.atan2(event.pageX - x, event.pageY - y);
			var rot = (rad * (180 / Math.PI) * -1) + 180;
			eye.css({
				'-webkit-transform': 'rotate(' + rot + 'deg)',
				'-moz-transform': 'rotate(' + rot + 'deg)',
				'-ms-transform': 'rotate(' + rot + 'deg)',
				'transform': 'rotate(' + rot + 'deg)'
			});
		});


	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<span class="title"><a href="index.html">' + 'CAT MAKES WORK' + '</a></span>' +
		'<a href="#navPanel" class="toggle"></a>' +

		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<h1>Menu</h1>' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +


		'<h1 style="margin-top:14em;">Contact</h1>' +
		'<nav>' +
		/*insta*/
		'<a href="https://www.instagram.com/thecatmakes/" class="link depth-0" target="_blank">' +
		'<span class="indent-0"></span>' +

		'<img src="/images/site/instasmall.png" class="iconz">' +

		'<b>instagram</b></a>' +

		/*email*/
		'<a class="link depth-0" target="_blank" href="mailto:thecatmakes@gmail.com">' +
		'<span class="indent-0"></span>' +


		'<img src="/images/site/lettersmall.png" class="iconz">' +

		'<b>e-mail</b></a>' +
		'</nav>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: false,
			resetScroll: true,
			resetForms: true,
			side: 'top',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

		/*footer*/
$(
	'<footer id="footer" class="wrapper">'+
            '<div class="inner">'+
                '<ul class="menu">'+
                    '<li>&copy; 2023 Cat Makes Work by Catherine Hong. All rights reserved &#10047;</li>'+

                   '<li><a href="mailto:thecatmakes@gmail.com" target="_blank"><img src="images/site/lettersmall.png" style="height:1.5em; width:auto;position:relative;top:.5em;"> Email</a></li>'+

                   '<li><a href="https://www.instagram.com/thecatmakes/" target="_blank"><img src="images/site/instasmall.png" style="height:1.5em; width:auto;position:relative;top:.5em;"> Instagram</a></li>'+
				'</ul>'+
                '<ul class="menu">'+
                    '<li>Responsive Layout: <a href="http://html5up.net">HTML5 UP</a></li>'+
                '</ul>'+
            '</div>'+
        '</footer>'
)
	.appendTo($body)






	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Play initial animations on page load.
	$window.on('load', function () {

		window.setTimeout(function () {
			/* nice */
			$(".loaderwrapper").fadeOut(1000);

			$body.removeClass('is-preload');
			$('body').css({ 'overflow': 'auto', 'height': 'auto', 'position': 'relative' });

		}, 100);

	});

	// Forms.

	// Hack: Activate non-input submits.
	$('form').on('click', '.submit', function (event) {

		// Stop propagation, default.
		event.stopPropagation();
		event.preventDefault();

		// Submit form.
		$(this).parents('form').submit();

	});

	// Sidebar.
	if ($sidebar.length > 0) {

		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$sidebar_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					initialize: function () {

						// Deactivate section.
						$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($sidebar_a.filter('.active-locked').length == 0) {

							$sidebar_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			// If <=large, >small, and sidebar is present, use its height as the offset.
			if (breakpoints.active('<=large')
				&& !breakpoints.active('<=small')
				&& $sidebar.length > 0)
				return $sidebar.height();

			return 0;

		}
	});

	// Spotlights.
	$('.spotlights > section')
		.scrollex({
			mode: 'middle',
			top: '-10vh',
			bottom: '-10vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		})
		.each(function () {

			var $this = $(this),
				$image = $this.find('.image'),
				$img = $image.find('img'),
				x;

			// Assign image.
			$image.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set background position.
			if (x = $img.data('position'))
				$image.css('background-position', x);

			// Hide <img>.
			$img.hide();

		});

	// Features.
	$('.features')
		.scrollex({
			mode: 'middle',
			top: '-20vh',
			bottom: '-20vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		});

})(jQuery);