
// JavaScript Document


	jQuery(window).on('load', function() {
	
		"use strict";
						
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		jQuery("#loader").delay(100).fadeOut();
		jQuery("#loader-wrapper").delay(100).fadeOut("fast");
				
		jQuery(window).stellar({});
		
	});
	

	jQuery(window).on('scroll', function() {
		
		"use strict";
								
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = jQuery(window).scrollTop();
		
		if( b > 72 ){		
			jQuery(".navbar").addClass("scroll");
		} else {
			jQuery(".navbar").removeClass("scroll");
		}				

	});


	jQuery(document).ready(function() {
			
		"use strict";


		/*----------------------------------------------------*/
		/*	Mobile Menu Toggle
		/*----------------------------------------------------*/

		if ( jQuery(window).width() < 769 ) {
			jQuery('.navbar-nav li.nav-item.nl-simple').on('click', function() {				
				jQuery('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
				jQuery('#navbarSupportedContent').removeClass("show");				
			});
		}


		/*----------------------------------------------------*/
		/*	Hero Fullscreen Slider
		/*----------------------------------------------------*/
	
		jQuery("#slides").superslides({
			play: 6000,
			animation: "fade",
			pagination: true
		});


		/*----------------------------------------------------*/
		/*	Hero Text Rotator
		/*----------------------------------------------------*/
	
		jQuery('.hero-slider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,  
			slideshowSpeed: 5500,   
			animationSpeed: 1500,  
			start: function(slider){
				jQuery('body').removeClass('loading');
			}
		});


		/*----------------------------------------------------*/
		/*	OnScroll Animation
		/*----------------------------------------------------*/
		
		jQuery('.animated').appear(function() {

	        var elem = jQuery(this);
	        var animation = elem.data('animation');

	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {
	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
						
		});


		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		jQuery('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				jQuerytarget = jQuery(target);

			jQuery('html, body').stop().animate({
				'scrollTop': jQuerytarget.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});
		
		
		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		jQuery.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = jQuery.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			jQuery('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				jQuery(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			jQuery(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				jQuery("body").append("<div id='"+ o.scrollName +"-active'></div>");
				jQuery(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			jQuery(window).on('scroll', function(){	
				switch (o.animation) {
					case "fade":
						jQuery( (jQuery(window).scrollTop() > o.topDistance) ? jQuery(scrollId).fadeIn(o.animationInSpeed) : jQuery(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						jQuery( (jQuery(window).scrollTop() > o.topDistance) ? jQuery(scrollId).slideDown(o.animationInSpeed) : jQuery(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						jQuery( (jQuery(window).scrollTop() > o.topDistance) ? jQuery(scrollId).show(0) : jQuery(scrollId).hide(0) );
				}
			});

			// To the top
			jQuery(scrollId).on('click', function(event){
				jQuery('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		jQuery.scrollUp();


		/*----------------------------------------------------*/
		/*	Video Background
		/*----------------------------------------------------*/
		
		jQuery('.video-play').vide("images/video/video", {
			posterType: "jpg"
		});


		/*----------------------------------------------------*/
		/*	Portfolio Grid
		/*----------------------------------------------------*/

		jQuery('.grid-loaded').imagesLoaded(function () {

	        // filter items on button click
	        jQuery('.portfolio-filter').on('click', 'button', function () {
	            var filterValue = jQuery(this).attr('data-filter');
	            jQuerygrid.isotope({
	              filter: filterValue
	            });
	        });

	        // change is-checked class on buttons
	        jQuery('.portfolio-filter button').on('click', function () {
	            jQuery('.portfolio-filter button').removeClass('is-checked');
	            jQuery(this).addClass('is-checked');
	            var selector = jQuery(this).attr('data-filter');
	            jQuerygrid.isotope({
	              filter: selector
	            });
	            return false;
	        });

	        // init Isotope
	        var jQuerygrid = jQuery('.masonry-wrap').isotope({
	            itemSelector: '.portfolio-item',
	            percentPosition: true,
	            transitionDuration: '0.7s',
	            masonry: {
	              // use outer width of grid-sizer for columnWidth
	              columnWidth: '.portfolio-item',
	            }
	        });
	        
	    });


		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/
				
		jQuery('.image-link').magnificPopup({
		  type: 'image'
		});


		/*----------------------------------------------------*/
		/*	Video Link #1 Lightbox
		/*----------------------------------------------------*/
		
		jQuery('.video-popup1').magnificPopup({
		    type: 'iframe',
		  	  
				iframe: {
					patterns: {
						youtube: {
			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/SZEflIVnhH8'
				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Video Link #2 Lightbox
		/*----------------------------------------------------*/
		
		jQuery('.video-popup2').magnificPopup({
		    type: 'iframe',
		  	  
				iframe: {
					patterns: {
						youtube: {
			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/7e90gBu4pas'
				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		jQuery('.statistic-number').each(function () {
			jQuery(this).appear(function() {
				jQuery(this).prop('Counter',0).animate({
					Counter: jQuery(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						jQuery(this).text(Math.ceil(now));
					}
				});
			},{accX: 0, accY: 0});
		});


		/*----------------------------------------------------*/
		/*	Animated Progress Bar
		/*----------------------------------------------------*/
		var delay = 500;
		jQuery(".progress-bar").each(function(i){
		    jQuery(this).delay( delay*i ).animate( { width: jQuery(this).attr('aria-valuenow') + '%' }, delay );

		    jQuery(this).prop('Counter',0).animate({}, {
		        duration: delay,
		        easing: 'swing',
		        step: function (now) {
		            jQuery(this).text(Math.ceil(now)+'%');
		        }
		    });
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator Slick Carousel
		/*----------------------------------------------------*/
		
		jQuery('#reviews-1 .center').slick({
			centerMode: true,
			autoplay: true,
			centerPadding: '0px',
			speed: 800,
			slidesToShow: 3,
			dots: true,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 3
					}
				},
				{
					breakpoint: 991,
					settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 3
					}
				},
				{
					breakpoint: 800,
					settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
					}
				},
				{
					breakpoint: 648,
					settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
					}
				}
			]
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator Flexslider
		/*----------------------------------------------------*/
		
		jQuery('#reviews-2 .flexslider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,  
			slideshowSpeed: 5000,   
			animationSpeed: 2000,  
			start: function(slider){
				jQuery('body').removeClass('loading');
			}
		});	


		/*----------------------------------------------------*/
		/*	Contact Form Validation
		/*----------------------------------------------------*/
		
		jQuery(".contact-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},       		
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							message:{
								required: "Please enter no more than (2) characters"
							}, 
						}
		});	


		/*----------------------------------------------------*/
		/*	Comment Form Validation
		/*----------------------------------------------------*/
		
		jQuery(".comment-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},       		
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							message:{
								required: "Please enter no more than (2) characters"
							}, 
						}
		});


		/*----------------------------------------------------*/
		/*	Booking Form Validation
		/*----------------------------------------------------*/
		
		jQuery(".booking-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 2,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},
					phone:{
						required: true,
						digits: true,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							phone:{
								required: "Please enter only digits",
								digits: "Please enter a valid number"
							}, 
						}
		});


		/*----------------------------------------------------*/
		/*	Register Form Validation
		/*----------------------------------------------------*/
		
		jQuery(".register-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 2,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},
					phone:{
						required: true,
						digits: true,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							phone:{
								required: "Please enter only digits",
								digits: "Please enter a valid number"
							}, 
						}
		});


		/*----------------------------------------------------*/
		/*	Bottom Quick Form
		/*----------------------------------------------------*/

		jQuery('.bottom-form-header').parent().delay(1000).animate({bottom: '-311px'}, 1000, function(){
			jQuery(this).find('.bottom-form-header').addClass('closed');
		}); 
		
		
		jQuery('.bottom-form-header').on('click', function(){
			if (jQuery(this).hasClass('closed')){
				jQuery(this).next('.bottom-form-holder').css({display:'block'}).parent().animate({bottom: 0}, 1000, function(){
					jQuery(this).find('.bottom-form-header').removeClass('closed');
				});
			} else {
				jQuery(this).parent().animate({bottom: '-311px'}, 1000, function(){
					jQuery(this).find('.bottom-form-header').addClass('closed');
				});
			}
			
			return false;
		});


		/*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/
	
		jQuery('.newsletter-form').ajaxChimp({
        language: 'cm',
        url: 'http://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});


		jQuery.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'We have sent you a confirmation email',
			1: 'Please enter your email address',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};	



	});