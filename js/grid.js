const grid = document.createElement("section");
export default grid;

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid__container");
grid.appendChild(gridContainer);

for (let i = 0; i < 16; i += 1) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `Card ${i}`;
  gridContainer.appendChild(card);
}
