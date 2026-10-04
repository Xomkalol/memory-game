const grid = document.createElement("section");
export default grid;

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid__container");
grid.appendChild(gridContainer);

for (let i = 0; i < 16; i += 1) {
  const card = document.createElement("div");
  card.classList.add("card");
  const pokeballImg = document.createElement("img");
  pokeballImg.alt = "pokeball logo";
  pokeballImg.src = "./assets/pokemon-icon.webp";
  card.appendChild(pokeballImg);
  gridContainer.appendChild(card);
}
