const modal = document.createElement("div");
export default modal;

modal.classList.add("modal");
const content = document.createElement("div");
content.classList.add("modal__content");
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function createModalContent(text, movesCounter, onNewGame) {
  if (text === "win") {
    content.replaceChildren();
    const header = document.createElement("h2");
    header.textContent = "YOU WON!";
    content.appendChild(header);
    const moves = document.createElement("span");
    moves.textContent = `you finished in ${movesCounter} moves`;
    content.appendChild(moves);

    const newGame = document.createElement("button");
    newGame.classList.add("modal__button");
    newGame.textContent = "New game";
    content.appendChild(newGame);
    modal.appendChild(content);

    newGame.addEventListener("click", () => {
      onNewGame();
      closeModal();
    });
  }

  if (text === "leader") {
    content.replaceChildren();
    const header = document.createElement("h2");
    header.textContent = "Leaders";
    content.appendChild(header);

    const results = JSON.parse(localStorage.getItem("gameResults"));

    if (!results) {
      const moves = document.createElement("span");
      moves.textContent = `There are no leaders yet`;
      content.appendChild(moves);
      modal.appendChild(content);
    } else {
      const leaderBoardContainer = document.createElement("ul");
      leaderBoardContainer.classList.add("leaderboard__container");
      content.appendChild(leaderBoardContainer);
      for (let i = 0; i < results.length; i++) {
        const dateInObj = new Date(results[i].date);
        const list = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = `${i + 1} place: Date: ${dateInObj.getUTCFullYear()}-${dateInObj.getUTCMonth() + 1}-${dateInObj.getUTCDate()} - moves: ${results[i].moves}`;
        list.appendChild(span);
        leaderBoardContainer.appendChild(list);
      }
    }
    modal.appendChild(content);
  }

  modal.classList.add("active");

  const closeButton = document.createElement("button");
  closeButton.classList.add("modal__button");
  closeButton.textContent = "Close";
  content.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    closeModal();
  });

  return;
}

function closeModal() {
  modal.classList.remove("active");
}

export { createModalContent };
