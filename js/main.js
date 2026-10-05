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
counterText.innerText = "Moves: 0";
counterTextContainer.appendChild(counterText);

const counterResetButton = document.createElement("div");
counterResetButton.classList.add("counter__reset-button");
counterResetButton.innerText = "Reset";
counterTextContainer.appendChild(counterResetButton);

// Score Container

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score__container");
sectionScore.appendChild(scoreContainer);

const scoreText = document.createElement("span");
scoreText.innerText = "Pairs:";
scoreContainer.appendChild(scoreText);

const scoreNumbers = document.createElement("span");
scoreNumbers.innerText = "0 / 0";
scoreContainer.appendChild(scoreNumbers);

main.appendChild(grid);
