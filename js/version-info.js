$(document).ready(function() {
  var versionElement = $('#version-info p');
  versionElement.text("Version: 0.1.1");
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
