// $(document).ready(function() {
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

// ===== Store + Config =====
const ITEMS = {
  shuffle: { cost: 2,  title: "Köpa blandning?", text: "Vill du köpa för 2 mynt?" },
  clue:    { cost: 5,  title: "Köpa ledtråd?",   text: "Vill du köpa för 5 mynt?" },
  solve:   { cost: 10, title: "Köpa lösning?",   text: "Vill du köpa för 10 mynt?" },
};

function loadState() {
  return {
    gold: Number(localStorage.getItem("ws-gold")) || 0,
    inventory: JSON.parse(localStorage.getItem("ws-inventory") || "{}"),
  };
}
function saveState(state) {
  localStorage.setItem("ws-gold", String(state.gold));
  localStorage.setItem("ws-inventory", JSON.stringify(state.inventory));
}
function initInventory() {
  // Ensure all known items exist (prevents undefined)
  const defaults = { shuffle: 0, clue: 0, solve: 0 };
  const state = loadState();
  state.inventory = Object.assign({}, defaults, state.inventory);
  saveState(state);
}

// ===== UI helpers =====
function updateGoldUI(gold) {
  $("#score span").text(gold);
}

function renderPowerUpBadges() {
  // Replaces your checkPowerUps()
  const { inventory } = loadState();
  ["clue","solve","shuffle"].forEach(key => {
    const count = Number(inventory[key]) || 0;
    const $el = $("#" + key);
    const $badge = $el.find(".count-badge");
    if (count <= 0) {
      $el.addClass("disabled").attr("aria-disabled", "true");
      $badge.hide();
    } else {
      $el.removeClass("disabled").attr("aria-disabled", "false");
      $badge.text(count).show();
    }
  });
}

function refreshAffordability() {
  const { gold } = loadState();
  $(".shop-item").each(function () {
    const $el = $(this);
    const key = resolveKeyFromEl($el);
    const cost = ITEMS[key]?.cost ?? Infinity;
    const canAfford = gold >= cost;
    $el.attr("aria-disabled", String(!canAfford))
       .toggleClass("disabled", !canAfford);
  });
}

function resolveKeyFromEl($el) {
  // Prefer data-item if present; else infer from class names
  let key = $el.data("item");
  if (key) return key;
  const classes = ($el.attr("class") || "").split(/\s+/);
  key = Object.keys(ITEMS).find(k => classes.includes(k));
  if (key) $el.attr("data-item", key); // cache for next time
  return key;
}

function confirmDialog(cfg) {
  if (typeof swal === "function") {
    return swal({
      title: cfg.title,
      text: cfg.text,
      buttons: {
        cancel: { text: "Avbryt", value: null, visible: true, closeModal: true },
        confirm:{ text: "Ja, köp", value: true, visible: true,  closeModal: true },
      },
    });
  } else {
    // Fallback if SweetAlert isn't on the page
    return Promise.resolve(window.confirm(`${cfg.title}\n\n${cfg.text}`));
  }
}

function playPurchaseSfx() {
  try {
    const sfx = new Audio("audio/transaction.wav");
    sfx.volume = 0.3;
    sfx.play();
  } catch (e) {}
}

// ===== Purchase flow =====
async function handleActivate(e) {
  const $el = $(this);

  // Guard: if visually disabled, ignore
  if ($el.is(".disabled") || $el.attr("aria-disabled") === "true") return;

  const key = resolveKeyFromEl($el);
  const item = ITEMS[key];
  if (!key || !item) {
    console.warn("Unknown shop item:", this);
    return;
  }

  // Always read fresh state
  let state = loadState();

  if (state.gold < item.cost) {
    confirmDialog({ title: item.title, text: "Inte nog med pengar!" });
    return;
  }

  const ok = await confirmDialog(item);
  if (!ok) return;

  // Prevent double-activation while we process
  $el.attr("aria-disabled", "true").addClass("disabled");

  // Apply purchase
  state.gold -= item.cost;
  state.inventory[key] = (Number(state.inventory[key]) || 0) + 1;

  saveState(state);
  updateGoldUI(state.gold);
  renderPowerUpBadges();   // show new counts
  refreshAffordability();  // re-check affordability vs remaining gold
  playPurchaseSfx();

  // If your game logic needs a reload, uncomment:
  // setTimeout(() => location.reload(), 300);
}

// ===== Wire up events =====
$(function () {
  // Initialize data
  initInventory();
  updateGoldUI(loadState().gold);
  renderPowerUpBadges();
  refreshAffordability();

  // Delegated handlers (works even if .shop isn't present yet)
  $(document)
    .on("click", ".shop-item", handleActivate)
    .on("keydown", ".shop-item", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleActivate.call(this, e);
      }
    });

  // Ensure these divs are keyboard/focusable if not already in your HTML
  $(".shop-item").attr({ role: "button", tabindex: 0 });
});
