// ===== Global touch guards (outside jQuery ready) =====
(() => {
  // Skip preventing context menu on editable elements
  const isEditable = el => /^(INPUT|TEXTAREA)$/.test(el.tagName) || el.isContentEditable;

  // Prevent long-press context menu (except on editable fields)
  document.addEventListener("contextmenu", e => {
    if (!isEditable(e.target)) e.preventDefault();
  });

  // Prevent two-finger gestures and double-tap zoom
  let lastTouchEnd = 0;
  const opts = { passive: false }; // must be non-passive to call preventDefault

  document.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length > 1) e.preventDefault();
  }, opts);

  document.addEventListener("touchend", e => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault(); // double-tap
    lastTouchEnd = now;
  }, opts);
})();

// ===== App bootstrap =====
$(function () {
  // Version label
  const VERSION = "0.1.6";
  $("#version-info p").text(`Version: ${VERSION}`);

  // Click sound (with a safe play helper)
  const clickSound = new Audio("audio/button.mp3");
  clickSound.volume = 0.3;
  function playClick() {
    // Avoid overlapping playback too harshly
    try {
      clickSound.currentTime = 0;
      const p = clickSound.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {}
  }

  // Fade in body (ensure we start hidden to avoid flash)
  $("body").css("display", "none").fadeIn(1000);

  // One delegated handler for all “click makes a sound” targets
  const clickTargets = ".shop-item, .get-href, #game-buttons li a";
  $(document).on("click", clickTargets, function (e) {
    playClick();

    // Handle data-href navigations with optional delay
    if ($(this).is(".get-href")) {
      const url   = $(this).data("href");
      const delay = Number($(this).data("delay")) || 100;
      if (url) setTimeout(() => { location.href = url; }, delay);
      // Prevent default if this element is also an <a>
      if (this.tagName === "A") e.preventDefault();
    }
  });
});
