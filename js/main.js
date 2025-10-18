// $(document).ready(function() {
//   // Declare variables
//   let wsGold = localStorage.getItem("ws-gold");
//   let wsg = [];
//
//   for (let i = 1; i <= 20; i++) {
//     wsg[i] = localStorage.getItem("ws-g" + i);
//   }
//
//   // Check if levels are completed
//   for (let i = 1; i <= 20; i++) {
//     let currentWsg = wsg[i];
//     let cssId = '#g' + i;
//
//     if (currentWsg !== null) {
//       if (parseInt(currentWsg) === 10) {
//         $(cssId).addClass('completed');
//       }
//     }
//   }
//
//   // Display gold amount
//   if (wsGold === null) {
//   	$("#score span").text("0");
// 	} else {
// 		$("#score span").text(wsGold);
// 	}
//
//   // Lock all levels except first one
//   const divs = $('.one-fifth a:not(:first)');
//   divs.each(function(index) {
//     $(this).addClass('locked');
//     $(this).html('<img src="img/padlock.png">');
//   });
//
//   // Check if previous level is completed and unlock the next level
//   for (var i = 1; i <= 20; i++) {
//     if ($('#g' + i).hasClass('completed')) {
//       $('#g' + i).parent().nextAll('.one-fifth').first().find('a').removeClass('locked');
//       $('#g' + i).parent().nextAll('.one-fifth').first().find('a').html(i + 1 + '<span>&check;</span>');
//     }
//   }
//
//   // How to button click
//   $('#how-to-button').click(function() {
//     swal("Hur du spelar", "Word Scramble är ett spännande ordspel där du ska försöka lista ut vilket ord du har framför dig på skärmen. Det finns flera kluriga nivåer, så börja gissa redan nu!");
//   });
//
//   // Reset game button click
//   $('#reset-button').click(function() {
//     swal({
//       title: "Återställ?",
//       text: "Vill du verkligen återställa spelet?",
//       buttons: {
//         cancel: {
//           text: "Avbryt",
//           value: null,
//           visible: true,
//           className: "",
//           closeModal: true,
//         },
//         confirm: {
//           text: "Ja, återställ",
//           value: true,
//           visible: true,
//           className: "",
//           closeModal: true,
//         },
//       },
//     })
//     .then((willReset) => {
//       if (willReset) {
//         localStorage.removeItem("ws-g1");
//         localStorage.removeItem("ws-g2");
//         localStorage.removeItem("ws-g3");
//         localStorage.removeItem("ws-g4");
//         localStorage.removeItem("ws-g5");
//         localStorage.removeItem("ws-g6");
//         localStorage.removeItem("ws-g7");
//         localStorage.removeItem("ws-g8");
//         localStorage.removeItem("ws-g9");
//         localStorage.removeItem("ws-g10");
//         localStorage.removeItem("ws-g11");
//         localStorage.removeItem("ws-g12");
//         localStorage.removeItem("ws-g13");
//         localStorage.removeItem("ws-g14");
//         localStorage.removeItem("ws-g15");
//         localStorage.removeItem("ws-g16");
//         localStorage.removeItem("ws-g17");
//         localStorage.removeItem("ws-g18");
//         localStorage.removeItem("ws-g19");
//         localStorage.removeItem("ws-g20");
//         localStorage.removeItem("ws-gold");
//         localStorage.removeItem("ws-inventory");
//       	location.reload();
//       }
//     });
//   });
//
//   // Credits button click
//   $('#credits-button').click(function() {
//     swal("Om spelet", "Spelet är skapat av Kim Andersson.\nIkoner är hämtade från flaticon.com");
//   });
// });

$(function () {
  // ===== Config =====
  const LEVELS = 20;
  const COMPLETE_SCORE = 10;        // >= 10 means completed
  const LVL_KEY = i => `ws-g${i}`;

  // ===== Storage helpers =====
  const getGold = () => Number(localStorage.getItem("ws-gold")) || 0;
  const setGold = n => localStorage.setItem("ws-gold", String(Number(n) || 0));

  const getLevelScore = i => Number(localStorage.getItem(LVL_KEY(i))) || 0;
  const isLevelCompleted = i => getLevelScore(i) >= COMPLETE_SCORE;

  // ===== UI helpers =====
  const $score = $("#score span");
  const setScoreUI = gold => $score.text(gold);

  function markCompletedLevels() {
    for (let i = 1; i <= LEVELS; i++) {
      if (isLevelCompleted(i)) {
        $(`#g${i}`).addClass("completed");
      } else {
        $(`#g${i}`).removeClass("completed");
      }
    }
  }

  function lockAllButFirst() {
    // Lock everything except the very first link in the grid
    $('.one-fifth a').each(function (idx) {
      if (idx === 0) return;
      $(this).addClass('locked').html('<img src="img/padlock.png">');
    });
  }

  function unlockNextAfterCompleted() {
    for (let i = 1; i <= LEVELS; i++) {
      if (!isLevelCompleted(i)) continue;
      // Find the tile that contains #g{i}, then unlock the next tile's <a>
      const $currentTile = $(`#g${i}`).parent(); // matches your original structure
      const $nextAnchor = $currentTile.nextAll('.one-fifth').first().find('a');
      if ($nextAnchor.length) {
        $nextAnchor.removeClass('locked')
                   .html((i + 1) + '<span>&check;</span>');
      }
    }
  }

  function resetGame() {
    for (let i = 1; i <= LEVELS; i++) {
      localStorage.removeItem(LVL_KEY(i));
    }
    localStorage.removeItem("ws-gold");
    localStorage.removeItem("ws-inventory");
    location.reload();
  }

  // ===== Initial render =====
  setScoreUI(getGold());
  markCompletedLevels();
  lockAllButFirst();
  unlockNextAfterCompleted();

  // ===== Buttons =====
  $('#how-to-button').on('click', function () {
    swal("Hur du spelar",
        "Word Scramble är ett spännande ordspel där du ska försöka lista ut vilket ord du har framför dig på skärmen. Det finns flera kluriga nivåer, så börja gissa redan nu!");
  });

  $('#reset-button').on('click', function () {
    swal({
      title: "Återställ?",
      text: "Vill du verkligen återställa spelet?",
      buttons: {
        cancel: { text: "Avbryt", value: null, visible: true, closeModal: true },
        confirm:{ text: "Ja, återställ", value: true, visible: true, closeModal: true },
      },
    }).then(ok => { if (ok) resetGame(); });
  });

  $('#credits-button').on('click', function () {
    swal("Om spelet", "Spelet är skapat av Kim Andersson.\nIkoner är hämtade från flaticon.com");
  });
});
