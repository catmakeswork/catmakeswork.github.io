(function ($) {
    var $body = $('body'),
        $header = document.getElementById('header');
        var current = location.pathname;
        var whatineed = current.slice(1);

/*header*/

    $(
        '<div class="inner">' +

            '<!-- Logo -->' +
                '<a href="index.html" class="logo">' +
                '<span class="title">Cat Makes Work</span>' +
                '</a>' +

            '<!-- Nav -->' +
                '<nav>' +
                '<ul>' +
                '<li><a href="#menu">Menu</a></li>' +
                '</ul>' +
                '</nav>' +
        '</div>' +

        '<!-- Menu -->' +
            '<nav id="menu">' +
            '<h1>Menu</h1>' +
            '<ul>' +
                '<li><a href="index.html">Home</a></li>' +
              
                '<li><a href="scout.html">Scout</a></li>' +
                '<li><a href="say-redesign.html">Say Redesign</a></li>' +
                '<li><a href="designing-for-play.html">Designing for Play</a></li>' +
                '<li><a href="illustrations.html">Illustrations</a></li>' +
                '<li><a href="about.html">About</a></li>' +
            '</ul>' +
            '</nav>' 
    )
        .appendTo($header)

/*Setting Active Link*/


  
    console.log(whatineed);
    $('#menu li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(whatineed) !== -1){
            $this.addClass('activepage');
        }

        // console.log($this.attr('href'));
        // console.log($this.attr('href').indexOf(current));
    })




    /*footer*/
    $(

        '<footer id="footer">' +
            '<div class="inner">' +

                '<ul class="copyright">' +
                '<li> Coded with love by &copy; Catherine Hong. All rights reserved</li>' +
                '<li>Template: <a href="http://html5up.net">HTML5 UP</a></li>' +
                '</ul>' +
            '</div>' +
        '</footer>'


    )
        .appendTo($body)
}
)(jQuery);