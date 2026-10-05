export default initGame;
import {
  setUpHandlerforCards,
  setUpHandlerNewGame,
  setUpHandlerLeaderBoard,
  setUpHandlerReset,
} from "./setupHandlers.js";

function initGame() {
  setUpHandlerforCards();
  setUpHandlerNewGame();
  setUpHandlerLeaderBoard();
  setUpHandlerReset();
}

const createCardsWith = (gridContainer, pokemon) => {
  const pokemonArray = [];
  for (let i = 0; i < pokemon.length; i++) {
    pokemonArray.push(pokemon[i]);
    pokemonArray.push(pokemon[i]);
  }

  const shuffleCards = (array) => {
    let arrayLength = array.length;
    while (arrayLength) {
      let randomElement = Math.floor(Math.random() * arrayLength--);
      let temporaryElementToSwap = array[arrayLength];
      array[arrayLength] = array[randomElement];
      array[randomElement] = temporaryElementToSwap;
    }
    return array;
  };

  shuffleCards(pokemonArray);

  for (let i = 0; i < pokemonArray.length; i += 1) {
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

    const pokemonImg = document.createElement("img");
    pokemonImg.alt = `${pokemonArray[i].name} image`;
    pokemonImg.src = `${pokemonArray[i].image}`;
    backCard.appendChild(pokemonImg);

    const backCardText = document.createElement("span");
    backCardText.textContent = `${pokemonArray[i].name}`;
    backCard.appendChild(backCardText);
    inner.appendChild(backCard);
  }
};
export { createCardsWith };
