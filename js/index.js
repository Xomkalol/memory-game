import header from "./header.js";
import main from "./main.js";
import footer from "./footer.js";
import initGame from "./gamelogic.js";
import modal from "./modal.js";

const body = document.body;
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
main.appendChild(modal);

initGame();
