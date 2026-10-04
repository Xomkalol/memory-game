const footer = document.createElement("footer");
export default footer;

const rollingScopesContainer = document.createElement("div");
rollingScopesContainer.classList.add("footer__rs-container");
footer.appendChild(rollingScopesContainer);

const rollingScopesLink = document.createElement("a");
rollingScopesLink.href = "https://rs.school/";
rollingScopesContainer.appendChild(rollingScopesLink);

const rollingScopesImg = document.createElement("img");
rollingScopesImg.alt = "rolling scopes logo";
rollingScopesImg.src = "./assets/rs.png";
rollingScopesLink.appendChild(rollingScopesImg);

const yearContainer = document.createElement("div");
yearContainer.classList.add("footer__year-container");
yearContainer.textContent = "2026";
footer.appendChild(yearContainer);

const githubContainer = document.createElement("div");
githubContainer.classList.add("footer__github-container");
footer.appendChild(githubContainer);

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/Xomkalol/memory-game";
githubContainer.appendChild(githubLink);

const githubImg = document.createElement("img");
githubImg.alt = "github logo";
githubImg.src = "./assets/github.png";
githubContainer.appendChild(githubImg);
