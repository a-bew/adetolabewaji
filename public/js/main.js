// Animate Smooth Scroll//
$.noConflict();
// Animate Smooth Scroll//

jQuery(document).ready(function($){
	$('#move-top').on('click', function(){
	    const images = $('#home').position().top;
	    $('html, body').animate(
	     {
	        scrollTop: images
	     },
	     900
	    );
	})
})


jQuery(document).ready(function($){

//    $(document).foundation();

		$('#view-home').on('click', function(){
			const images = $('#home').position().top;

			$('html, body').animate(
		     {
		     	scrollTop: images
		     },
		     900
			);
		})

})



// Animate Smooth Scroll//
jQuery(document).ready(function($){

		$('#view-about').on('click', function(){
			const images = $('#about-us').position().top;

			$('html, body').animate(
		     {
		     	scrollTop: images
		     },
		     900
			);
		})
})

// Animate Smooth Scroll//
jQuery(document).ready(function($){

		$('#view-work').on('click', function(){
			const images = $('#our-work').position().top;

			$('html, body').animate(
		     {
		     	scrollTop: images
		     },
		     900
			);
		})

})

// Animate Smooth Scroll//
jQuery(document).ready(function($){

		$('#view-contact').on('click', function(){
			const images = $('#contact-us').position().top;

			$('html, body').animate(
		     {
		     	scrollTop: images
		     },
		     900
			);
		})
})
