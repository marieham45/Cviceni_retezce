/*
Vlastnosti a metody
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.
*/

document.body.innerHTML += `<h1>Cvičení: Vlastnosti a metody</h2>`;

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

/*
E-maily
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

*/

// 1. Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
document.body.innerHTML += `<h1>Cvičení: E-maily</h2>`;

// 2. Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
const email = prompt("Zadejte e-mailovou adresu");

// 3. Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
const atIndex = email.indexOf("@");

// 4. Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
const userName = email.slice(0, atIndex);

// 5.  Dále z e-mailu získejte název domény tedy například gmail.com.
const domain = email.slice(atIndex + 1, email.length);

/* 6. Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
    userName: 'slavomir.ponuchalek',
    domain: 'yahoo.com',
  };

  */
const parsedEmail = {
  userName,
  domain,
};

// 7. Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
document.body.innerHTML += `
<p>Uživatelské jméno: ${parsedEmail.userName}</p>
<p>Doména: ${parsedEmail.domain}</p>
`;
