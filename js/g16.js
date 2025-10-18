$(function () {
  // ========= Config =========
  const WORDS = ['kaffe', 'te', 'cocacola', 'juice', 'vatten', 'mjölk', 'nyponsoppa', 'oboy', 'saft', 'smoothie'];
  const LVL_KEY = "ws-g16";          // level progress for this stage
  const GOLD_KEY = "ws-gold";       // coin score
  const INVENTORY_KEY = "ws-inventory";
  const POWER_KEYS = ["clue", "solve", "shuffle"];

  // ========= Audio =========
  const sfx = {
    success: new Audio('audio/success.mp3'),
    fail:    new Audio('audio/wronganswer.mp3'),
    tiles:   new Audio('audio/tiles.mp3'),
  };
  sfx.success.volume = sfx.fail.volume = sfx.tiles.volume = 0.3;

  // ========= State (derived from storage) =========
  let currentLevel = Number(localStorage.getItem(LVL_KEY)) || 1;
  let gold = Number(localStorage.getItem(GOLD_KEY)) || 0;
  let currentWord = "";   // set by render/generate/solve
  let revealIndex = 0;    // used by clue()

  // ========= Storage helpers =========
  const loadInv = () => JSON.parse(localStorage.getItem(INVENTORY_KEY) || "{}");
  function saveInv(inv) {
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inv));
    // Mirror to legacy keys (compat with existing UI/other code)
    POWER_KEYS.forEach(k => localStorage.setItem("ws-" + k, String(Number(inv[k]) || 0)));
  }
  const getInvCount = k => Number(loadInv()[k]) || 0;
  function setInvCount(k, val) { const inv = loadInv(); inv[k] = Math.max(0, Number(val) || 0); saveInv(inv); }

  // ========= UI helpers =========
  const $scoreSpan = $("#score span");
  const $levelSpan = $("#level-display span");

  function updateGoldUI() { $scoreSpan.text(gold); }
  function updateLevelUI() { $levelSpan.text(currentLevel); }

  function badgeOf($el) { // prefer dedicated badge; else last span (not price/icon)
    const $b = $el.find(".count-badge");
    return $b.length ? $b : $el.find("span").last();
  }

  function updatePowerUpUI(key) {
    const count = getInvCount(key);
    const $el = $("#" + key);
    const $badge = badgeOf($el);
    const off = count <= 0;
    $el.toggleClass("disabled", off).attr("aria-disabled", String(off)).prop("tabIndex", off ? -1 : 0);
    if (off) $badge.hide().text(""); else $badge.text(count).show();
  }

  function refreshAllPowerUps() { POWER_KEYS.forEach(updatePowerUpUI); }

  // ========= ClickSpark setup (if present) =========
  if (window.clickSpark) {
    clickSpark.setParticleCount(5);
    clickSpark.setParticleImagePath('img/coin.png');
    clickSpark.setParticleRotationSpeed(12);
    clickSpark.setAnimationType('explosion');
    clickSpark.setParticleSize(12);
    clickSpark.setParticleSpeed(8);
    clickSpark.setParticleDuration(300);
  }

  // ========= Word rendering =========
  function renderWord(word, opts = { scramble: true, fillInput: false }) {
    currentWord = word;
    revealIndex = 0;

    const show = opts.scramble ? scramble(word) : word;
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = '';

    sfx.tiles.currentTime = 0;
    sfx.tiles.play();

    for (let i = 0; i < show.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = show[i];
      letter.classList.add('letter');
      letter.style.animationDelay = `${i * 0.05}s`;
      wordDisplay.appendChild(letter);
    }

    const $input = $('#user-input');
    $input.focus();
    if (opts.fillInput) $input.val(word);
    $input.attr("placeholder", opts.fillInput ? "" : "Gissa ordet");
  }

  // Fisher–Yates; ensures we don’t accidentally return the same exact ordering when possible
  function scramble(word) {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const shuffled = arr.join('');
    return (shuffled === word && word.length > 1) ? scramble(word) : shuffled;
  }

  // ========= Power-ups (use) =========
  async function tryUsePowerUp(key, actionFn) {
    const have = getInvCount(key);
    if (have <= 0) {
      const $el = $("#" + key);
      $el.addClass("disabled").attr("aria-disabled", "true");
      // Optional: swal("Slut!", "Du har inga kvar.");
      return;
    }
    // Run effect
    actionFn?.();
    // Decrement & refresh UI
    setInvCount(key, have - 1);
    updatePowerUpUI(key);
  }

  function doClue() {
    $('#user-input').focus();
    if (!currentWord) return;

    if (revealIndex < currentWord.length) {
      $("#user-input").val(function (_i, oldVal) {
        return oldVal + currentWord[revealIndex];
      });
      revealIndex++;
    } else if (typeof swal === "function") {
      swal("Ledtråd", "Alla bokstäver är avslöjade!");
    }
  }

  function doSolve() {
    const word = WORDS[currentLevel - 1];
    renderWord(word, { scramble: false, fillInput: true });
  }

  function doShuffle() {
    const word = WORDS[currentLevel - 1];
    renderWord(word, { scramble: true, fillInput: false });
  }

  // ========= Game logic =========
  function generateWord() {
    const word = WORDS[currentLevel - 1];
    renderWord(word, { scramble: true, fillInput: false });
  }

  function checkWord() {
    const guess = $('#user-input').val().toLowerCase().trim();

    if (guess === currentWord) {
      // correct
      $('#user-input').attr("placeholder", "Rätt!");
      gold += 1;
      localStorage.setItem(GOLD_KEY, String(gold));
      updateGoldUI();

      if (window.clickSpark) clickSpark.fireParticles($('#score'));
      sfx.success.currentTime = 0;
      sfx.success.play();

      // advance level
      currentLevel += 1;
      if (currentLevel > WORDS.length) {
        localStorage.setItem(LVL_KEY, "10"); // mark completed for this stage
        setTimeout(() => { window.location = "index.html"; }, 800);
      } else {
        localStorage.setItem(LVL_KEY, String(currentLevel));
        setTimeout(() => {
          updateLevelUI();
          generateWord();
        }, 1000);
      }
    } else {
      // wrong
      sfx.fail.currentTime = 0;
      sfx.fail.play();
      $('#user-input').addClass('shake');
      setTimeout(() => { $('#user-input').removeClass('shake'); }, 300);
    }

    // clear input either way
    $('#user-input').val('');
  }

  // ========= Event wiring =========
  $("#clue").on("click",   () => tryUsePowerUp("clue",   doClue));
  $("#solve").on("click",  () => tryUsePowerUp("solve",  doSolve));
  $("#shuffle").on("click",() => tryUsePowerUp("shuffle",doShuffle));

  $('#check-btn').on('click', checkWord);
  $('#user-input').on('keyup', function (e) { if (e.key === 'Enter') checkWord(); });

  // ========= Initial render =========
  updateGoldUI();
  updateLevelUI();
  refreshAllPowerUps();
  generateWord();
});
