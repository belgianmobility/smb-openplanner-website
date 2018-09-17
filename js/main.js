jQuery(document).ready( function () {
  jQuery('a[href*="#"]').
    not('[href="#"]').
    not('[href="#0"]').
    click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          if (jQuery('.menu-wrapper').hasClass('nav-open')) {
            jQuery('.menu-wrapper').removeClass('nav-open');
          }
          scrollTo(target.offset().top, focus(target), 1600);
        }
      }
  });

  jQuery('.open-menu-button').click(function (e) {
    jQuery('.menu-wrapper').addClass('nav-open');
  });

  jQuery('.close-menu-button').click(function (e) {
    jQuery('.menu-wrapper').removeClass('nav-open');
  });
});


function focus(el) {
  el.focus();
  if (el.is(":focus")) {
    return false;
  } else {
    el.attr('tabindex','-1');
    el.focus();
  };
}

Math.easeInOutExpo = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
	t--;
	return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
};

function scrollTo(to, callback, duration) {
  function move(amount) {
    document.scrollingElement.scrollTop = amount;
  }
  function position() {
    return document.scrollingElement.scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = (typeof(duration) === 'undefined') ? 800 : duration;
  var animateScroll = function() {
    currentTime += increment;
    var val = Math.easeInOutExpo(currentTime, start, change, duration);
    move(val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        callback();
      }
    }
  };
  animateScroll();
}
