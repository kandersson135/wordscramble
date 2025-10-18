$(document).ready(function() {
  const words = ['hund', 'björn', 'lejon', 'påfågel', 'kamel', 'uggla', 'giraff', 'blåval', 'kameleont', 'krokodil'];
  let wsg3 = localStorage.getItem("ws-g3");
  let wsGold = localStorage.getItem("ws-gold");
  let currentWord;
  let currentLevel;
  let score;
  let index = 0;
  const success = new Audio('audio/success.mp3');
  const fail = new Audio('audio/wronganswer.mp3');
  const tiles = new Audio('audio/tiles.mp3');
  success.volume = 0.3;
  fail.volume = 0.3;
  tiles.volume = 0.3;

  // Get current level
  if (wsg3 === null) {
    currentLevel = 1;
  } else {
    currentLevel = wsg3;
    $('#level-display span').text(currentLevel);
  }

  // Display gold amount
  if (wsGold === null) {
    score = 0;
  	$("#score span").text("0");
	} else {
    score = wsGold;
		$("#score span").text(wsGold);
	}

  // Compatibility layer — single source of truth = ws-inventory
  function loadInv() {
    return JSON.parse(localStorage.getItem("ws-inventory") || "{}");
  }
  function saveInv(inv) {
    localStorage.setItem("ws-inventory", JSON.stringify(inv));
    // Optional: mirror to old keys for compatibility
    ["clue","solve","shuffle"].forEach(k => {
      localStorage.setItem("ws-"+k, String(Number(inv[k]) || 0));
    });
  }
  function getInvCount(key) {
    const inv = loadInv();
    return Number(inv[key]) || 0;
  }
  function setInvCount(key, val) {
    const inv = loadInv();
    inv[key] = Math.max(0, Number(val) || 0);
    saveInv(inv);
  }

  function tryUsePowerUpInv(key, actionFn) {
    const have = getInvCount(key);
    if (have <= 0) {
      $("#"+key).addClass("disabled").attr("aria-disabled","true");
      return;
    }
    actionFn?.();
    setInvCount(key, have - 1);
    updatePowerUpUI(key);
  }

  function updatePowerUpUI(key) {
    const count = getInvCount(key);
    const $el = $("#"+key);
    let $badge = $el.find(".count-badge");
    if ($badge.length === 0) $badge = $el.find("span").last();

    const off = count <= 0;
    $el.toggleClass("disabled", off)
       .attr("aria-disabled", String(off))
       .prop("tabIndex", off ? -1 : 0);

    if (off) $badge.hide().text("");
    else $badge.text(count).show();
  }

  function checkPowerUps() {
    ["clue","solve","shuffle"].forEach(updatePowerUpUI);
  }

  // Wire up
  $("#clue").on("click", () => tryUsePowerUpInv("clue", clue));
  $("#solve").on("click", () => tryUsePowerUpInv("solve", solveWord));
  $("#shuffle").on("click", () => tryUsePowerUpInv("shuffle", generateWord));

  // On load
  checkPowerUps();

  // Clickspark
  clickSpark.setParticleCount(5);
  clickSpark.setParticleImagePath('img/coin.png');
  clickSpark.setParticleRotationSpeed(12);
  clickSpark.setAnimationType('explosion');
  clickSpark.setParticleSize(12);
  clickSpark.setParticleSpeed(8);
  clickSpark.setParticleDuration(300);

  function generateWord() {
    //currentWord = words[Math.floor(Math.random() * words.length)];
    currentWord = words[currentLevel - 1];
    const scrambledWord = scramble(currentWord);
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = '';
    index = 0;

    tiles.play();

    for (let i = 0; i < scrambledWord.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = scrambledWord[i];
      letter.classList.add('letter');
      letter.style.animationDelay = `${i * 0.05}s`;
      wordDisplay.appendChild(letter);
    }

    $('#user-input').focus();
    $("#user-input").attr("placeholder", "Gissa ordet");
  }

  function solveWord() {
    currentWord = words[currentLevel - 1];
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = '';

    tiles.play();

    for (let i = 0; i < currentWord.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = currentWord[i];
      letter.classList.add('letter');
      letter.style.animationDelay = `${i * 0.05}s`;
      wordDisplay.appendChild(letter);
    }

    $('#user-input').focus();
    //$("#user-input").attr("placeholder", "Gissa ordet");
    $('#user-input').val(currentWord);
  }

  function clue() {
    $('#user-input').focus();

    if (index < currentWord.length) {
      $("#user-input").val(function(i, oldVal) {
        return oldVal + currentWord[index];
      });
      index++;
    } else {
      swal("Ledtråd", "Alla bokstäver är avslöjade!");
    }
  }

  function scramble(word) {
    let scrambled = '';
    const wordArray = word.split('');

    while (wordArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * wordArray.length);
      scrambled += wordArray.splice(randomIndex, 1);
    }

    return scrambled;
  }

  function checkWord() {
    const userInput = $('#user-input').val().toLowerCase().trim();

    if (userInput === currentWord) {
      // Update level
      currentLevel++;

      // Update placeholder
      $("#user-input").attr("placeholder", "Rätt!");

      // Update score
      score++;
      $('#score span').text(score);
      localStorage.setItem("ws-gold", score);

      // Clickspark
      clickSpark.fireParticles($('#score'));
      success.play();

      // Check current level
      if (currentLevel > words.length) {
        localStorage.setItem("ws-g3", 10);
        setTimeout(function() {
          window.location = "index.html";
        }, 800);
      } else {
        localStorage.setItem("ws-g3", currentLevel);
      }

      // Generate new word
      setTimeout(function() {
        $('#level-display span').text(currentLevel);
        generateWord();
      }, 1000);
    } else {
      fail.play();

      $('#user-input').addClass('shake');
      setTimeout(function(){
        $('#user-input').removeClass('shake');
      },300);
    }

    // Empty input field
    $('#user-input').val('');
  }

  $('#check-btn').on('click', function() {
    checkWord();
  });

  $('#user-input').on('keyup', function(event) {
    if (event.key === 'Enter') {
      checkWord();
    }
  });

  generateWord();
});
