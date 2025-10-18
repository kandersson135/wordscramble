$(document).ready(function() {
  // let wsGold = localStorage.getItem("ws-gold");
  // let wsShuffle = localStorage.getItem("ws-shuffle");
  // let wsSolve = localStorage.getItem("ws-solve");
  // let wsClue = localStorage.getItem("ws-clue");
  // let purchase = new Audio("audio/transaction.wav");
  // purchase.volume = 0.3;
  //
  // // Display gold amount
  // if (wsGold === null) {
  // 	$("#score span").text("0");
	// } else {
	// 	$("#score span").text(wsGold);
	// }
  //
  // // Buy clue
  // $('.clue').click(function() {
  //   if (wsGold < 5) {
  //   	swal("Köpa ledtråd?", "Inte nog med pengar!");
  //   } else {
  //   	swal({
  //       title: "Köpa ledtråd?",
  //       text: "Vill du köpa för 5 mynt?",
  //       buttons: {
  //         cancel: {
  //           text: "Avbryt",
  //           value: null,
  //           visible: true,
  //           className: "",
  //           closeModal: true,
  //         },
  //         confirm: {
  //           text: "Ja, köp",
  //           value: true,
  //           visible: true,
  //           className: "",
  //           closeModal: true,
  //         },
  //       },
  //     })
  //     .then((willBuy) => {
  //       if (willBuy) {
  //         if (wsClue === null || wsClue === 0) {
  //           localStorage.setItem("ws-clue", 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
  //         	$("#score span").text(wsGold - 5);
  //         	purchase.play();
  //           setTimeout(function(){location.reload();}, 1000);
  //         } else {
  //           localStorage.setItem("ws-clue", parseInt(wsClue) + 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
  //         	$("#score span").text(wsGold - 5);
  //         	purchase.play();
  //         	setTimeout(function(){location.reload();}, 1000);
  //         }
  //       }
  //     });
  //   }
  // });
  //
  // // Buy shuffle
  // $('.shuffle').click(function() {
  //   if (wsGold < 2) {
  //   	swal("Köpa blandning?", "Inte nog med pengar!");
  //   } else {
  //   	swal({
  //       title: "Köpa blandning?",
  //       text: "Vill du köpa för 2 mynt?",
  //       buttons: {
  //         cancel: {
  //           text: "Avbryt",
  //           value: null,
  //           visible: true,
  //           className: "",
  //           closeModal: true,
  //         },
  //         confirm: {
  //           text: "Ja, köp",
  //           value: true,
  //           visible: true,
  //           className: "",
  //           closeModal: true,
  //         },
  //       },
  //     })
  //     .then((willBuy) => {
  //       if (willBuy) {
  //         if (wsShuffle === null || wsShuffle === 0) {
  //           localStorage.setItem("ws-shuffle", 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 2);
  //         	$("#score span").text(wsGold - 2);
  //         	purchase.play();
  //           setTimeout(function(){location.reload();}, 1000);
  //         } else {
  //           localStorage.setItem("ws-shuffle", parseInt(wsShuffle) + 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 2);
  //         	$("#score span").text(wsGold - 2);
  //         	purchase.play();
  //         	setTimeout(function(){location.reload();}, 1000);
  //         }
  //       }
  //     });
  //   }
  //
  //   /*
  //   if (wsGold <= 5) {
  //   	swal("Köpa blanda?", "Inte nog med pengar!");
  //   } else {
  //   	swal({
  //       title: "Köpa blanda?",
  //       text: "Vill du köpa en blanda?",
  //       buttons: true,
  //     })
  //     .then((willBuy) => {
  //       if (willBuy) {
  //         if (wsScramble === null || wsScramble === 0) {
  //           localStorage.setItem("ws-shuffle", 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
  //         	$("#score span").text(wsGold - 5);
  //         	purchase.play();
  //           setTimeout(function(){location.reload();}, 1000);
  //         } else {
  //           localStorage.setItem("ws-shuffle", parseInt(wsScramble) + 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 5);
  //         	$("#score span").text(wsGold - 5);
  //         	purchase.play();
  //         	setTimeout(function(){location.reload();}, 1000);
  //         }
  //       }
  //     });
  //   }
  //   */
  // });
  //
  // // Buy solve
  // $('.solve').click(function() {
  //   if (wsGold < 10) {
  //   	swal("Köpa lösning?", "Inte nog med pengar!");
  //   } else {
  //   	swal({
  //       title: "Köpa lösning?",
  //       text: "Vill du köpa för 10 mynt?",
  //       //buttons: true,
  //       buttons: {
  //         cancel: {
  //           text: "Avbryt",
  //           value: null,
  //           visible: true,
  //           className: "",
  //           closeModal: true,
  //         },
  //         confirm: {
  //           text: "Ja, köp",
  //           value: true,
  //           visible: true,
  //           className: "",
  //           closeModal: true,
  //         },
  //       },
  //     })
  //     .then((willBuy) => {
  //       if (willBuy) {
  //         if (wsSolve === null || wsSolve === 0) {
  //           localStorage.setItem("ws-solve", 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 10);
  //         	$("#score span").text(wsGold - 10);
  //         	purchase.play();
  //           setTimeout(function(){location.reload();}, 1000);
  //         } else {
  //           localStorage.setItem("ws-solve", parseInt(wsSolve) + 1);
  //         	localStorage.setItem("ws-gold", parseInt(wsGold) - 10);
  //         	$("#score span").text(wsGold - 10);
  //         	purchase.play();
  //         	setTimeout(function(){location.reload();}, 1000);
  //         }
  //       }
  //     });
  //   }
  // });

  // ---- storage helpers ----
  const S = {
    load() {
      return {
        gold: Number(localStorage.getItem("ws-gold")) || 0,
        inventory: JSON.parse(localStorage.getItem("ws-inventory") || "{}"),
      };
    },
    save(state) {
      localStorage.setItem("ws-gold", String(state.gold));
      localStorage.setItem("ws-inventory", JSON.stringify(state.inventory));
    }
  };

  const ITEMS = {
    shuffle: { cost: 2,  title: "Köpa blandning?", text: "Vill du köpa för 2 mynt?" },
    clue:    { cost: 5,  title: "Köpa ledtråd?",   text: "Vill du köpa för 5 mynt?" },
    solve:   { cost: 10, title: "Köpa lösning?",   text: "Vill du köpa för 10 mynt?" },
  };

  const purchaseSfx = new Audio("audio/transaction.wav");
  purchaseSfx.volume = 0.3;

  function updateGoldUI(gold) { $("#score span").text(gold); }

  function confirmDialog({ title, text }) {
    return swal({
      title, text,
      buttons: {
        cancel: { text: "Avbryt", value: null, visible: true, closeModal: true },
        confirm:{ text: "Ja, köp", value: true, visible: true,  closeModal: true },
      },
    });
  }

  // initial render
  updateGoldUI(S.load().gold);
  refreshAffordability();

  // disable unaffordable items
  function refreshAffordability() {
    const { gold } = S.load();
    $(".shop-item").each(function() {
      const key = $(this).data("item");
      const canAfford = gold >= (ITEMS[key]?.cost ?? Infinity);
      $(this)
        .attr("aria-disabled", !canAfford)
        .toggleClass("disabled", !canAfford);
    });
  }

  // one delegated handler for click + keyboard
  $(".shop")
    .on("click", ".shop-item", tryPurchase)
    .on("keydown", ".shop-item", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tryPurchase.call(this, e);
      }
    });

  async function tryPurchase(e) {
    const $el = $(this);
    const key = $el.data("item");
    const item = ITEMS[key];
    if (!item) return;

    let state = S.load();
    if (state.gold < item.cost) {
      swal(item.title, "Inte nog med pengar!");
      return;
    }

    const ok = await confirmDialog(item);
    if (!ok) return;

    // Prevent double-activation
    $el.attr("aria-disabled", true).addClass("disabled");

    // Apply purchase
    state.gold -= item.cost;
    state.inventory[key] = (Number(state.inventory[key]) || 0) + 1;

    S.save(state);
    updateGoldUI(state.gold);
    refreshAffordability();
    purchaseSfx.play();

    // Only reload if absolutely necessary for your game state:
    // setTimeout(() => location.reload(), 300);
  }

});
