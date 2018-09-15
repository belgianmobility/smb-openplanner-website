 jQuery(document).ready( function () {
     jQuery('a[href^="#"]:not([href="#"]').click( function (e) {
         e.preventDefault();
         var target = jQuery(e.currentTarget.hash);
         jQuery('.menu-wrapper').animate({'left':'-100vw'}, 200);
         jQuery("html, body").animate( { scrollTop: target.offset().top }, 700);
     });
    
    jQuery('.open-menu-button').click(function (e) {
        e.preventDefault();
        jQuery('.menu-wrapper').animate({'left':'0'});
    });
    
    jQuery('.close-menu-button').click(function (e) {
        e.preventDefault();
        jQuery('.menu-wrapper').animate({'left':'-100vw'});
    });
        
 });
 
