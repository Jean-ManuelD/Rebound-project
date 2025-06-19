//vérifiction dans la consoloe que le fichier js est bien relié au html
console.log("coucou");

// Récupérer l'élément dans le DOM
const toTop = document.querySelector("#toTop");
//ajouter l'évènement au clic puis remonter dans la page
toTop.addEventListener("click", () => {
 window.scrollTo({ top: 0, behavior: "smooth" });
});

// Créer un tableau d'avis. Une const ave plusieurs valeurs possibles.
const avis = [
    {texte:` " Rebound, c’est ce que je cherchais sans le savoir. Du matos solide, stylé, et une vibe qui me rappelle les playgrounds de mon enfance. Respect. "`, auteur:"- Noah G., joueur semi-pro et créateur de contenu sportif."},
    {texte:` " Ils ont compris que le terrain, c’est pas juste du jeu. C’est un lien social. Et leurs produits respectent ça. "`, auteur:"- Samir B., Coach communautaire & Organisateur de tournois urbains."},
    {texte:` " J’organise mes sessions du week-end avec Rebound. Les terrains sont tops, bien placés, et surtout l’ambiance est toujours au rendez-vous. "`, auteur:"- Annaëlle M., Coach de basket amateur."},
];

//Initialiser l'index à 0
let indexAvis =0;

//récupérer dans le DOM
const avisSection = document.querySelector(".avis");
const texte = document.querySelector("#avisTexte");
const auteur = document.querySelector("#avisAuteur");
const avisPrev = document.querySelector("#avisPrev");
const avisNext = document.querySelector("#avisNext");

//Fonction d'affichage des avis
function afficherAvis() {

    avisSection.classList.add("fade-out");

  setTimeout(() => {
    texte.textContent = avis[indexAvis].texte;
    auteur.textContent = avis[indexAvis].auteur;

    // fade in
    avisSection.classList.remove("fade-out");
    avisSection.classList.add("fade-in");
  }, 250);

  // retire fade-in après animation
  setTimeout(() => {
    avisSection.classList.remove("fade-in");
  }, 500);
}

//Event au clic sur précédent
avisPrev.addEventListener("click", () => {
    indexAvis = (indexAvis - 1 + avis.length) % avis.length
    afficherAvis();
});

//Event au clic sur suivant
avisNext.addEventListener("click", () => {
    indexAvis = (indexAvis + 1) % avis.length
    afficherAvis();
});

//Affichage
afficherAvis();


/*
const cta = document.querySelectorAll(".cta_jaune");

cta.addEventListener("click", function() {
    cta.classList.remove("cta_jaune");
    cta.classList.add("cta_white");
})
*/






// Variables : nom, type, valeur
// let maVariable = maValeur
/*
let firstName = "Jean-Manuel";
let lastName ="Diaz";
let number1 =5;
let number2 =100;

number2 = number1 + number2;
console.log(number2);

number1 = number2 * 5-40;

console.log("<strong>" + firstName + " " + lastName + "</strong>"); // à utiliser directement dans le html
console.log(`%c${firstName} ${lastName}`, 'font-weight: bold'); // ajout de CSS directement dans la console

document.write("<p> Mon premier nombre est : " + number1 + "</p>"); //afficher via concatenation
document.write(`Mon deuxième nombre est ${number2}`); //intégrer variable directement dans chaîne de caractères avec le $
*/

//INTERAGIR AVEC INTERNAUTES

/*const prenom = window.prompt("Comment t'appelles-tu"); //Si chaîne de caractère demandée
const age = parseFloat(window.prompt("Quel âge as-tu ?")); //Si nombre demandé --> parseFloat

console.log(`Tu t'appelles : ${prenom}`);
console.log(age);
*/

/*
 * L’objectif est d’afficher un montant TTC après que l’utilisateur ait saisi un montant HT. 
 * Nous partons du principe que la TVA est de 20%.
 * AIDE : TTC = HT x (1 + ([taux de TVA] / 100))
 */
/*
// 1- Déclarer ses variables : TVA, nombreHT, nombreTTC
let TVA = 20;
let nombreHT;
let nombreTTC;

// 2- Calculs
// 2.1- Demander à l'utilisateur de donner un nombre, ce nombre sera stocké dans une variable nombreHT
nombreHT = parseFloat(window.prompt("Quelle est le montant HT ?"));

// (OPTIONNEL SI PAS FAIT EN 2.1 -- 2.2- convertir en nombre)

// 2.3 - faire le calcul afficher dans AIDE
nombreTTC = nombreHT * (1 + (TVA / 100))

// 3- Affichage : montant choisi par l'utilisateur, le montant de la TVA, montant TTC
document.write(`<p> Le motnant HT choisi est de : ${nombreHT} €</p>`);
document.write(`<p> La TVA est de : ${TVA} % </p>`);
document.write(`Le montant TTC est donc de : ${nombreTTC} €.`);
*/

/*
// DOM ==> Document Object Model = récupérer des infos HTML et CSS pour pouvoir les modifier
//1. Récuprer l'élément dans le DOM
const title2 = document.querySelector("#titre"); // Récupérer un ID
const title3 = document.querySelector(".titre3"); // Récupérer une class
//console.log(title2);
title2.textContent = "Sous-titre";
title3.textContent = "Sous- Sous-titre";

const links = document.querySelectorAll("a");
console.log(links)

// Ajouter une class dans un élément HTML
const title = document.querySelector("#titre");
console.log(title)
title.classList.add("lien-secondaire");
title.classList.remove("lien-secondaire");*/
