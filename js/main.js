$(document).ready(function() {
  /*
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
  let wsg11 = localStorage.getItem("ws-g11");
  let wsg12 = localStorage.getItem("ws-g12");
  let wsg13 = localStorage.getItem("ws-g13");
  let wsg14 = localStorage.getItem("ws-g14");
  let wsg15 = localStorage.getItem("ws-g15");
  let wsg16 = localStorage.getItem("ws-g16");
  let wsg17 = localStorage.getItem("ws-g17");
  let wsg18 = localStorage.getItem("ws-g18");
  let wsg19 = localStorage.getItem("ws-g19");
  let wsg20 = localStorage.getItem("ws-g20");
  */
  // Declare variables
  let wsGold = localStorage.getItem("ws-gold");
  let wsg = [];

  for (let i = 1; i <= 20; i++) {
    wsg[i] = localStorage.getItem("ws-g" + i);
  }

  // Check if levels are completed
  for (let i = 1; i <= 20; i++) {
    let currentWsg = wsg[i];
    let cssId = '#g' + i;

    if (currentWsg !== null) {
      if (parseInt(currentWsg) === 10) {
        $(cssId).addClass('completed');
      }
    }
  }

  /*
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

  if (wsg11 !== null) {
    if (parseInt(wsg11) === 10) {
      $('#g11').addClass('completed');
    }
  }

  if (wsg11 !== null) {
    if (parseInt(wsg11) === 10) {
      $('#g11').addClass('completed');
    }
  }

  if (wsg13 !== null) {
    if (parseInt(wsg13) === 10) {
      $('#g13').addClass('completed');
    }
  }

  if (wsg14 !== null) {
    if (parseInt(wsg14) === 10) {
      $('#g14').addClass('completed');
    }
  }

  if (wsg15 !== null) {
    if (parseInt(wsg15) === 10) {
      $('#g15').addClass('completed');
    }
  }

  if (wsg16 !== null) {
    if (parseInt(wsg16) === 10) {
      $('#g16').addClass('completed');
    }
  }

  if (wsg17 !== null) {
    if (parseInt(wsg17) === 10) {
      $('#g17').addClass('completed');
    }
  }

  if (wsg18 !== null) {
    if (parseInt(wsg18) === 10) {
      $('#g18').addClass('completed');
    }
  }

  if (wsg19 !== null) {
    if (parseInt(wsg19) === 10) {
      $('#g19').addClass('completed');
    }
  }

  if (wsg20 !== null) {
    if (parseInt(wsg20) === 10) {
      $('#g20').addClass('completed');
    }
  }
  */

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
  for (var i = 1; i <= 20; i++) {
    if ($('#g' + i).hasClass('completed')) {
      $('#g' + i).parent().nextAll('.one-fifth').first().find('a').removeClass('locked');
      $('#g' + i).parent().nextAll('.one-fifth').first().find('a').html(i + 1 + '<span>&check;</span>');
    }
  }

  // How to button click
  $('#how-to-button').click(function() {
    swal("Hur du spelar", "Word Scramble är ett spännande ordspel där du ska försöka lista ut vilket ord du har framför dig på skärmen. Det finns flera kluriga nivåer, så börja gissa redan nu!");
  });

  // Reset game button click
  $('#reset-button').click(function() {
    swal({
      title: "Återställ?",
      text: "Vill du verkligen återställa spelet?",
      buttons: {
        cancel: {
          text: "Avbryt",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Ja, återställ",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
      },
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
        localStorage.removeItem("ws-g11");
        localStorage.removeItem("ws-g12");
        localStorage.removeItem("ws-g13");
        localStorage.removeItem("ws-g14");
        localStorage.removeItem("ws-g15");
        localStorage.removeItem("ws-g16");
        localStorage.removeItem("ws-g17");
        localStorage.removeItem("ws-g18");
        localStorage.removeItem("ws-g19");
        localStorage.removeItem("ws-g20");
        localStorage.removeItem("ws-gold");
        localStorage.removeItem("ws-clue");
        localStorage.removeItem("ws-shuffle");
        localStorage.removeItem("ws-solve");
      	location.reload();
      }
    });
  });

  // Credits button click
  $('#credits-button').click(function() {
    swal("Om spelet", "Spelet är skapat av Kim Andersson.");
  });
});
