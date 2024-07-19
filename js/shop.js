$(document).ready(function() {
  let wsGold = localStorage.getItem("ws-gold");
  let wsShuffle = localStorage.getItem("ws-shuffle");
  let wsSolve = localStorage.getItem("ws-solve");
  let wsClue = localStorage.getItem("ws-clue");
  let purchase = new Audio("audio/transaction.wav");
  purchase.volume = 0.3;

  // Display gold amount
  if (wsGold === null) {
  	$("#score span").text("0");
	} else {
		$("#score span").text(wsGold);
	}

  // Buy clue
  $('.clue').click(function() {
    swal("Under konstruktion", "Denna knapp är fortfarande under konstruktion.");

    /*
    if (wsGold < 5) {
    	swal("Köpa ledtråd?", "Inte nog med pengar!");
    } else {
    	swal({
        title: "Köpa ledtråd?",
        text: "Vill du köpa en ledtråd?",
        buttons: true,
      })
      .then((willBuy) => {
        if (willBuy) {
          if (wsClue === null || wsClue === 0) {
            localStorage.setItem("ws-clue", 1);
          	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
          	$("#score span").text(wsGold - 5);
          	purchase.play();
            setTimeout(function(){location.reload();}, 1000);
          } else {
            localStorage.setItem("ws-clue", parseInt(wsClue) + 1);
          	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
          	$("#score span").text(wsGold - 5);
          	purchase.play();
          	setTimeout(function(){location.reload();}, 1000);
          }
        }
      });
    }
    */
  });

  // Buy shuffle
  $('.shuffle').click(function() {
    swal("Under konstruktion", "Denna knapp är fortfarande under konstruktion.");

    $('.shuffle').click(function() {
      if (wsGold < 5) {
      	swal("Köpa blanda?", "Inte nog med pengar!");
      } else {
      	swal({
          title: "Köpa blanda?",
          text: "Vill du löpa en blanda?",
          buttons: true,
        })
        .then((willBuy) => {
          if (willBuy) {
            if (wsShuffle === null || wsShuffle === 0) {
              localStorage.setItem("ws-shuffle", 1);
            	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
            	$("#score span").text(wsGold - 5);
            	purchase.play();
              setTimeout(function(){location.reload();}, 1000);
            } else {
              localStorage.setItem("ws-shuffle", parseInt(wsShuffle) + 1);
            	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
            	$("#score span").text(wsGold - 5);
            	purchase.play();
            	setTimeout(function(){location.reload();}, 1000);
            }
          }
        });
      }
    });

    /*
    if (wsGold <= 5) {
    	swal("Köpa blanda?", "Inte nog med pengar!");
    } else {
    	swal({
        title: "Köpa blanda?",
        text: "Vill du köpa en blanda?",
        buttons: true,
      })
      .then((willBuy) => {
        if (willBuy) {
          if (wsScramble === null || wsScramble === 0) {
            localStorage.setItem("ws-shuffle", 1);
          	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
          	$("#score span").text(wsGold - 5);
          	purchase.play();
            setTimeout(function(){location.reload();}, 1000);
          } else {
            localStorage.setItem("ws-shuffle", parseInt(wsScramble) + 1);
          	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
          	$("#score span").text(wsGold - 5);
          	purchase.play();
          	setTimeout(function(){location.reload();}, 1000);
          }
        }
      });
    }
    */
  });

  // Buy solve
  $('.solve').click(function() {
    if (wsGold < 10) {
    	swal("Köpa lösning?", "Inte nog med pengar!");
    } else {
    	swal({
        title: "Köpa lösning?",
        text: "Vill du löpa en lösning?",
        buttons: true,
      })
      .then((willBuy) => {
        if (willBuy) {
          if (wsSolve === null || wsSolve === 0) {
            localStorage.setItem("ws-solve", 1);
          	localStorage.setItem("ws-gold", parseInt(wsGold) - 10);
          	$("#score span").text(wsGold - 10);
          	purchase.play();
            setTimeout(function(){location.reload();}, 1000);
          } else {
            localStorage.setItem("ws-solve", parseInt(wsSolve) + 1);
          	localStorage.setItem("ws-gold", parseInt(wsGold) - 10);
          	$("#score span").text(wsGold - 10);
          	purchase.play();
          	setTimeout(function(){location.reload();}, 1000);
          }
        }
      });
    }
  });
});
