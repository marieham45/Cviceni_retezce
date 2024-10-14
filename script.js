/*
Vlastnosti a metody
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.
*/

const title = "Karlík a továrna na čokoládu";

// Vypište do stránky počet znaků názvu.
document.body.innerHTML += `<p>Počet znaků: ${title.length}</p>`;

// Vypište název filmu převedený na velká písmena.
document.body.innerHTML += `<p>Název filmu velkými písmeny: ${title.toUpperCase()}</p>`;

// Vypište z názvu prvních pět písmen.
document.body.innerHTML += `<p>Prvních 5 znaků: ${title.slice(0, 5)}</p>`;

// Vypište z názvu posledních pět písmen.

const pozicePoslednihoZnaku = title.length - 1;
const pozicePatehoZnakuOdKonce = title.length - 5;

document.body.innerHTML += `<p>Posledních 5 znaků: ${title.slice(
  pozicePatehoZnakuOdKonce,
  pozicePoslednihoZnaku + 1
)}</p>`;
