export default initGame;
import {
  setUpHandlerforCards,
  setUpHandlerNewGame,
  setUpHandlerLeaderBoard,
  setUpHandlerReset,
  setUpPairs,
} from "./setupHandlers.js";

function initGame() {
  // let pairsCounter = 0;
  let score = 0;
  let firstCard = "";
  let secondCard = "";
  let isLocked = false;
  const setMatchedCards = new Set();

  function handleCardClick(card) {
    if (isLocked) {
      return;
    }

    if (setMatchedCards.has(card.querySelector(".card__inner"))) {
      return;
    }

    if (firstCard === card) {
      return;
    }
    const inner = card.querySelector(".card__inner");
    inner.classList.add("active");

    if (firstCard === "") {
      firstCard = card;
      console.log("Это первая карточка", firstCard);
      return;
    }
    secondCard = card;
    console.log("Это вторая карточка", secondCard);
    if (firstCard === secondCard) {
      return;
    }
    isLocked = true;

    if (firstCard.dataset.pokemonId == secondCard.dataset.pokemonId) {
      score++;
      console.log(score);
      setMatchedCards.add(firstCard.querySelector(".card__inner"));
      setMatchedCards.add(secondCard.querySelector(".card__inner"));
      setUpPairs(score);
      firstCard = "";
      secondCard = "";
      isLocked = false;
      return;
    } else {
      console.log("Это не пара!");
    }

    setTimeout(() => {
      firstCard = "";
      secondCard = "";
      isLocked = false;
      resetActiveCards();
    }, 1000);
    return;
  }

  function resetActiveCards() {
    const gridContainer = document.querySelector(".grid__container");
    const activeCards = gridContainer.querySelectorAll(".active");

    activeCards.forEach((card) => {
      if (!setMatchedCards.has(card)) {
        console.log(setMatchedCards.has(card));
        card.classList.toggle("active");
      }
    });
  }
  setUpHandlerforCards(handleCardClick);
  setUpHandlerNewGame();
  setUpHandlerLeaderBoard();
  setUpHandlerReset();
  setUpPairs(score);
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
    cardContainer.dataset.pokemonId = pokemonArray[i].id;
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

/* 1. initGame
   ↓
2. состояние игры
   ↓
3. клик по первой карточке
   ↓
4. клик по второй карточке
   ↓
5. проверка пары
   ↓
6. блокировка + таймер для несовпадения
   ↓
7. счётчик ходов
   ↓
8. счётчик найденных пар
   ↓
9. проверка победы
   ↓
10. finishGame
   ↓
11. victory modal
   ↓
12. startNewGame
   ↓
13. localStorage результатов
   ↓
14. leaderboard
   ↓
15. общий механизм модалок */
