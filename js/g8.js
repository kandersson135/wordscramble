$(document).ready(function() {
  const words = ['luleå', 'stockholm', 'västerås', 'malmö', 'uppsala', 'piteå', 'göteborg', 'visby', 'jönköping', 'borås'];
  let wsg8 = localStorage.getItem("ws-g8");
  let wsGold = localStorage.getItem("ws-gold");
  let currentWord;
  let currentLevel;
  let score;
  const success = new Audio('audio/success.mp3');
  const fail = new Audio('audio/wronganswer.mp3');
  const tiles = new Audio('audio/tiles.mp3');
  success.volume = 0.3;
  fail.volume = 0.3;
  tiles.volume = 0.3;

  // Get current level
  if (wsg8 === null) {
    currentLevel = 1;
  } else {
    currentLevel = wsg8;
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

  // Set power up count
  function checkPowerUps() {
    if (localStorage.getItem("ws-clue") === null || localStorage.getItem("ws-clue") <= 0) {
      $('#clue').addClass("disabled");
  	} else {
  		$('#clue span').html(localStorage.getItem("ws-clue"));
  		$('#clue span').show();
  	}

    if (localStorage.getItem("ws-solve") === null || localStorage.getItem("ws-solve") <= 0) {
      $('#solve').addClass("disabled");
  	} else {
  		$('#solve span').html(localStorage.getItem("ws-solve"));
  		$('#solve span').show();
  	}

    if (localStorage.getItem("ws-shuffle") === null || localStorage.getItem("ws-shuffle") <= 0) {
      $('#shuffle').addClass("disabled");
  	} else {
  		$('#shuffle span').html(localStorage.getItem("ws-shuffle"));
  		$('#shuffle span').show();
  	}
  }

  // Call the function initially
  checkPowerUps();

  // Set up a recurring check every second (1000 milliseconds)
  setInterval(checkPowerUps, 100);

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
    $("#user-input").attr("placeholder", "Gissa ordet");
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
        localStorage.setItem("ws-g8", 10);
        setTimeout(function() {
          window.location = "index.html";
        }, 800);
      } else {
        localStorage.setItem("ws-g8", currentLevel);
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

  // Clue button click
	$('#clue').click(function() {
    if (localStorage.getItem("ws-clue") === 0) {
  		$('#clue').addClass("disabled");
  	} else {
      // Subtract 1 of clue power
    	let oldCluePower = localStorage.getItem("ws-clue");
    	localStorage.setItem("ws-clue", (parseInt(oldCluePower)) - 1);
    	$('#clue span').html(localStorage.getItem("ws-clue"));
  	}
  });

  // Solve button click
	$('#solve').click(function() {
    solveWord();

  	// Subtract 1 of solve power
  	let oldSolvePower = localStorage.getItem("ws-solve");
  	localStorage.setItem("ws-solve", (parseInt(oldSolvePower)) - 1);
  	$('#solve span').html(localStorage.getItem("ws-solve"));
  });

  // Shuffle button click
	$('#shuffle').click(function() {
    generateWord();

    // Subtract 1 of shuffle power
    let oldShufflePower = localStorage.getItem("ws-shuffle");
    localStorage.setItem("ws-shuffle", (parseInt(oldShufflePower)) - 1);
    $('#shuffle span').html(localStorage.getItem("ws-shuffle"));
  });
});
