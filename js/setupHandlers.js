import { createModalContent } from "./modal.js";

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
    newGame();
  });
};

const setUpHandlerLeaderBoard = () => {
  const leaderboardButton = document.querySelector(".action__leaderboard");

  leaderboardButton.addEventListener("click", () => {
    createModalContent("leader", 0, () => {});
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
  setUpPairs,
  setUpmoves,
};
