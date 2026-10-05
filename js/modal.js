const modal = document.createElement("div");
export default modal;

modal.classList.add("modal");
const content = document.createElement("div");
content.classList.add("modal__content");

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("active");
  }
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});

function createModalContent(text, movesCounter) {
  if (text === "win") {
    content.replaceChildren();
    const header = document.createElement("h2");
    header.textContent = "YOU WON!";
    content.appendChild(header);
    const moves = document.createElement("span");
    moves.textContent = `you finished in ${movesCounter} moves`;
    content.appendChild(moves);
    modal.appendChild(content);
  }

  if (text === "leader") {
    content.replaceChildren();
    const header = document.createElement("h2");
    header.textContent = "Leaders";
    content.appendChild(header);
    const moves = document.createElement("span");
    moves.textContent = `There are leaders`;
    content.appendChild(moves);
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
