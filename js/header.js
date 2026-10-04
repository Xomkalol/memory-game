const header = document.createElement("header");
export default header;

// Name container
const gameNameContainer = document.createElement("div");
gameNameContainer.classList.add("header__name-container");
header.appendChild(gameNameContainer);

const gameName = document.createElement("span");
gameName.textContent = "Pokememory";
gameNameContainer.appendChild(gameName);

const pokeballImageContainer = document.createElement("div");
const pokeballImage = document.createElement("img");
pokeballImage.alt = "pokeball image";
pokeballImage.src = "./assets/pokemon-icon.webp";
pokeballImageContainer.appendChild(pokeballImage);
pokeballImageContainer.classList.add("pokeball__image-container");
gameNameContainer.appendChild(pokeballImageContainer);

// Actions container

const actionContainer = document.createElement("div");
actionContainer.classList.add("header__action-container");
header.appendChild(actionContainer);

const newGameButton = document.createElement("div");
newGameButton.textContent = "New game";
actionContainer.appendChild(newGameButton);

const leadersButton = document.createElement("div");
leadersButton.textContent = "Leaderboard";
actionContainer.appendChild(leadersButton);
