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

const setUpPairs = (score) => {
  const resetButton = document.querySelector(".score__number");
  resetButton.innerText = `${score} / 8`;
};

export {
  setUpHandlerforCards,
  setUpHandlerNewGame,
  setUpHandlerLeaderBoard,
  setUpHandlerReset,
  setUpPairs,
};
