$(document).ready(function() {
  var clickSound = new Audio("audio/button.mp3");
  clickSound.volume = 0.3;
  var versionElement = $('#version-info p');
  versionElement.text("Version: 0.1.5");

  // Play audio on click or tap
	$(".shop-item, .get-href, #game-buttons li a").click(function() {
	  // Play click sound
		clickSound.play();
	});

	// Link function
	$('.get-href').on('click',function(){
		var a_href = $(this).data('href');

		window.setTimeout(function () {
    	location.href = a_href;
    }, 100);
	});

	// Fade in body
	$('body').hide();
	$('body').fadeIn(1000);
});

// Prevent long press to open up context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('touchend', function (e) {
    var now = new Date().getTime();
    if ((now - lastTouchEnd) <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

var lastTouchEnd = 0;
