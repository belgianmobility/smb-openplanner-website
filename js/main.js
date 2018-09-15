 jQuery(document).ready( function () {
     jQuery('a[href^="#"]').click( function (e) {
         e.preventDefault();
         var target = jQuery(e.currentTarget.hash);
         jQuery("html, body").animate( { scrollTop: target.offset().top }, 400);
     });
 });