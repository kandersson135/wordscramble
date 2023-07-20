$(document).ready(function() {
  let wsg1 = localStorage.getItem("ws-g1");
  let wsg2 = localStorage.getItem("ws-g2");
  let wsg3 = localStorage.getItem("ws-g3");
  let wsg4 = localStorage.getItem("ws-g4");
  let wsg5 = localStorage.getItem("ws-g5");
  let wsg6 = localStorage.getItem("ws-g6");
  let wsg7 = localStorage.getItem("ws-g7");
  let wsg8 = localStorage.getItem("ws-g8");
  let wsg9 = localStorage.getItem("ws-g9");
  let wsg10 = localStorage.getItem("ws-g10");
  let wsGold = localStorage.getItem("ws-gold");

  // Check if levels are completed
  if (wsg1 !== null) {
    if (parseInt(wsg1) === 10) {
      $('#g1').addClass('completed');
    }
  }

  if (wsg2 !== null) {
    if (parseInt(wsg2) === 10) {
      $('#g2').addClass('completed');
    }
  }

  if (wsg3 !== null) {
    if (parseInt(wsg3) === 10) {
      $('#g3').addClass('completed');
    }
  }

  if (wsg4 !== null) {
    if (parseInt(wsg4) === 10) {
      $('#g4').addClass('completed');
    }
  }

  if (wsg5 !== null) {
    if (parseInt(wsg5) === 10) {
      $('#g5').addClass('completed');
    }
  }

  if (wsg6 !== null) {
    if (parseInt(wsg6) === 10) {
      $('#g6').addClass('completed');
    }
  }

  if (wsg7 !== null) {
    if (parseInt(wsg7) === 10) {
      $('#g7').addClass('completed');
    }
  }

  if (wsg8 !== null) {
    if (parseInt(wsg8) === 10) {
      $('#g8').addClass('completed');
    }
  }

  if (wsg9 !== null) {
    if (parseInt(wsg9) === 10) {
      $('#g9').addClass('completed');
    }
  }

  if (wsg10 !== null) {
    if (parseInt(wsg10) === 10) {
      $('#g10').addClass('completed');
    }
  }

  // Display gold amount
  if (wsGold === null) {
  	$("#score span").text("0");
	} else {
		$("#score span").text(wsGold);
	}

  // Lock all levels except first one
  const divs = $('.one-fifth a:not(:first)');
  divs.each(function(index) {
    $(this).addClass('locked');
    $(this).html('<img src="img/padlock.png">');
  });

  // Check if previous level is completed and unlock the next level
  for (var i = 1; i <= 10; i++) {
    if ($('#g' + i).hasClass('completed')) {
      $('#g' + i).parent().nextAll('.one-fifth').first().find('a').removeClass('locked');
      $('#g' + i).parent().nextAll('.one-fifth').first().find('a').html(i + 1 + '<span>&check;</span>');
    }
  }

  // How to button click
  $('#how-to-button').click(function() {
    swal("Hur du spelar", "Word Scramble är ett spännande ordspel där du ska försöka lista ut vilket ord du har framför dig på skärmen.");
  });

  // Reset game button click
  $('#reset-button').click(function() {
    swal({
      title: "Återställ?",
      text: "Vill du verkligen återställa spelet?",
      buttons: true,
    })
    .then((willReset) => {
      if (willReset) {
        localStorage.removeItem("ws-g1");
        localStorage.removeItem("ws-g2");
        localStorage.removeItem("ws-g3");
        localStorage.removeItem("ws-g4");
        localStorage.removeItem("ws-g5");
        localStorage.removeItem("ws-g6");
        localStorage.removeItem("ws-g7");
        localStorage.removeItem("ws-g8");
        localStorage.removeItem("ws-g9");
        localStorage.removeItem("ws-g10");
        localStorage.removeItem("ws-gold");
      	location.reload();
      }
    });
  });

  // Credits button click
  $('#credits-button').click(function() {
    swal("Om spelet", "Spelet är skapat av Kim Andersson.");
  });
});
