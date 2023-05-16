/* Theme Name: Dorsin - Responsive Landing page template
   Author: Themesbrand
   Version: 1.0.0
   Created: July 2018
   File Description: Main JS file of the template
*/
(function ($) {

    'use strict';

    // Navbar
    function initNavbar() {
  		$('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 92)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        
		$(".tooltip-handle").click(function() {
			if($("#_dL").attr("class") == 'css-edyqgg') {
				$("#dark-light").attr("href", "css/dark.css" );
				$("#_dL").attr("class", 'css-1fnh8j1');
                return false;
			}
			if($("#_dL").attr("class") == 'css-1fnh8j1') {
				$("#_dL").attr("class", 'css-edyqgg');
				$("#dark-light").attr("href", "css/light.css" );
                return false;
			}
		});
    }

    // Sticky Header
    function initSticky() {
        $(".sticky").sticky({
            topSpacing: 0
        });
    }
    
    //Scrollspy
	function initScrollspy() {
		$("#navbarCollapse").scrollspy({
		    offset:20
		});
	}

	// Magnific Popup
    function initMagnificPopup() {
        $('.video-play-icon').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }

    function initContactForm() {
    	$('#contact-form').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;
        });
    }

    function init() {
        initNavbar();
        initSticky();
        initScrollspy();
        initMagnificPopup();
        initContactForm();
        Waves.init();
    }

    $(document).ready(function(){
        init(); 
    });

    // init();

})(jQuery)