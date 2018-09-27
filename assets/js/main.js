jQuery(document).ready(function($) {

	/*====== Show More/Less Projects ======= */
	$('a.show-more').on("click", function() {
		if ($(this).siblings('div.show-more').hasClass('hidden')) {
			$(this).siblings('div.show-more').removeClass('hidden');
			$(this).children('i').addClass('fa-angle-double-up');
			$(this).children('i').removeClass('fa-angle-double-down');
			$(this).children('span').html(' Show Less');
		}
		else {
			$(this).siblings('div.show-more').addClass('hidden');
			$(this).children('i').addClass('fa-angle-double-down');
			$(this).children('i').removeClass('fa-angle-double-up');
			$(this).children('span').html(' Show More');
		}
	});
	
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
});