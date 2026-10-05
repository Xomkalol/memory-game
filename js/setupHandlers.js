const setUpHandlerforCards = () => {
  const container = document.querySelectorAll(".card__container");

  function addEventListenerCard(card) {
    card.addEventListener("click", (event) => {
      const inner = event.currentTarget.querySelector(".card__inner");
      inner.classList.toggle("active");
    });
  }

  container.forEach((card) => {
    addEventListenerCard(card);
  });
};

const setUpHandlerNewGame = () => {
  const newGameButton = document.querySelector(".action__newgame");

  newGameButton.addEventListener("click", () => {
    console.log("start new game");
  });
};

const setUpHandlerLeaderBoard = () => {
  const leaderboardButton = document.querySelector(".action__leaderboard");

  leaderboardButton.addEventListener("click", () => {
    console.log("view leaderBoard");
  });
};

const setUpHandlerReset = () => {
  const resetButton = document.querySelector(".counter__reset-button");

  resetButton.addEventListener("click", () => {
    console.log("reset game");
  });
};

export {
  setUpHandlerforCards,
  setUpHandlerNewGame,
  setUpHandlerLeaderBoard,
  setUpHandlerReset,
};
