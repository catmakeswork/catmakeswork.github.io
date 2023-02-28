(function ($) {
    var $body = $('body'),
    $header = document.getElementById('header');


$(
    '<a href="index.html" class="title">CAT MAKES WORK</a>'+




	'<nav id="nav">'+
		'<ul>'+
			'<li style="visibility:hidden;">'+
				'<a href="index.html">'+
					'<div class="iconnav" data-legend="home"><img src="images/site/hellosmall.png" class="iconz">'+
					'</div>'+
					'<b>about</b>'+
				'</a>'+
			'</li>'+
			'<li>'+
				'<a href="id.html">'+
					'<div class="iconnav" data-legend="industrial design">'+
						'<img src="images/site/idsmall.png" class="iconz">'+
					'</div>'+
					'<b>industrial design</b>'+
				'</a>'+
			'</li>'+

			'<li>'+
				'<a href="experience.html">'+
					'<div class="iconnav" data-legend="experience"> <img src="images/site/expsmall.png" class="iconz">'+ 
                    '</div>'+
					'<b>experience</b>'+
				'</a>'+
			'</li>'+

			'<li>'+
				'<a href="motion.html">'+
					'<div class="iconnav" data-legend="motion"><img src="images/site/anismall.png" class="iconz">'+
					'</div>'+
					'<b>motion</b>'+
				'</a>'+
			'</li>'+

			'<li>'+
				'<a href="illustration.html">'+
					'<div class="iconnav" data-legend="illustration"><img src="images/site/illussmall.png" class="iconz">'+
                    '</div>'+
					'<b>illustration</b>'+
				'</a>'+
			'</li>'+

			'<li style="visibility:hidden;">'+
				'<a href="sketchbook.html" data-legend="sketchbook">'+
					'<div class="iconnav"><img src="images/site/booksmall.png" class="iconz">'+
                    '</div>'+
					'<b>sketchbook</b>'+
				'</a>'+
			'</li>'+


		'</ul>'+
	'</nav>'
)
.appendTo($header);
})(jQuery);