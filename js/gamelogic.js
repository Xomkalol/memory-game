export default initGame;

function initGame() {
  const container = document.querySelectorAll(".card__container");

  function addEventListenerCard(card) {
    card.addEventListener("click", (event) => {
      console.log("click");
      const inner = event.currentTarget.querySelector(".card__inner");
      inner.classList.toggle("active");
    });
  }

  container.forEach((card) => {
    addEventListenerCard(card);
  });
}
