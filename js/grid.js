import { createCardsWith } from "./gamelogic.js";
import pokemon from "./pokemon.js";
const grid = document.createElement("section");
export default grid;

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid__container");
grid.appendChild(gridContainer);

createCardsWith(gridContainer, pokemon);

/* for (let i = 0; i < 16; i += 1) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card__container");
  gridContainer.appendChild(cardContainer);

  const inner = document.createElement("div");
  inner.classList.add("card__inner");
  cardContainer.appendChild(inner);

  const frontcard = document.createElement("div");
  frontcard.classList.add("card");
  const pokeballImg = document.createElement("img");
  pokeballImg.alt = "pokeball logo";
  pokeballImg.src = "./assets/pokemon-icon.webp";
  frontcard.appendChild(pokeballImg);
  inner.appendChild(frontcard);

  const backCard = document.createElement("div");
  backCard.classList.add("card__back");
  backCard.textContent = "Pokemon!";
  inner.appendChild(backCard);
}
 */
