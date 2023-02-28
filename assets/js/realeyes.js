
		(function ($) {
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

    })(jQuery);