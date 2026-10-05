const main = document.createElement("main");
export default main;

import grid from "./grid.js";

//sectionScore
const sectionScore = document.createElement("div");
sectionScore.classList.add("main__score-container");
main.appendChild(sectionScore);

// Counter Container
const counterContainer = document.createElement("div");
counterContainer.classList.add("counter__container");
sectionScore.appendChild(counterContainer);

const counterTextContainer = document.createElement("div");
counterTextContainer.classList.add("counter__text-container");
counterContainer.appendChild(counterTextContainer);

const counterText = document.createElement("span");
counterText.classList.add("counter__moves");
counterTextContainer.appendChild(counterText);

// Score Container

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score__container");
sectionScore.appendChild(scoreContainer);

const scoreText = document.createElement("span");
scoreText.innerText = "Pairs:";
scoreContainer.appendChild(scoreText);

const scoreNumbers = document.createElement("span");
scoreNumbers.classList.add("score__number");
scoreContainer.appendChild(scoreNumbers);

main.appendChild(grid);
