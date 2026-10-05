const setUpHandlerforCards = (handleCardClick) => {
  const container = document.querySelectorAll(".card__container");

  function addEventListenerCard(card) {
    card.addEventListener("click", () => {
      handleCardClick(card);
    });
  }

  container.forEach((card) => {
    addEventListenerCard(card);
  });
};

const setUpHandlerNewGame = (newGame) => {
  const newGameButton = document.querySelector(".action__newgame");

  newGameButton.addEventListener("click", () => {
    console.log("start new game");
    newGame();
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

const setUpPairs = (score) => {
  const resetButton = document.querySelector(".score__number");
  resetButton.innerText = `${score} / 8`;
};

const setUpmoves = (moves) => {
  const counterText = document.querySelector(".counter__moves");
  counterText.innerText = `Moves: ${moves}`;
};

export {
  setUpHandlerforCards,
  setUpHandlerNewGame,
  setUpHandlerLeaderBoard,
  setUpHandlerReset,
  setUpPairs,
  setUpmoves,
};
