/*
// DOM => Document Object Model 
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
title.classList.remove("lien-secondaire");
*/

// Sélectionner les balises "li"
const elementsli = document.querySelectorAll('li');
console.log(elementsli);

// Sélectionner la deuxième balise "p"
const elementp2 = document.querySelector("p:nth-child(3)"); //nth-Child ==> prend le parent de l'élément choisi (ici p) et va chercher son 3e enfant.
console.log(elementp2);

// Sélectionner la balise "article"
const article = document.querySelector("article");
console.log(article);

// Sélectionner les balises "a"
const links = document.querySelectorAll("a");
console.log(links);

// Sélectionner avec querySelector la balise avec la class "test"
const classTest = document.querySelector(".test");
console.log(classTest);

// Sélectionner avec querySelector la balise avec l'id "test"
const idTest = document.querySelector("#test");
console.log(idTest);

// Créer un évènement au double click sur la balise "h2" qui va afficher dans la console "Hello World"

let h2 = document.querySelector('h2');
console.log(h2);

h2.addEventListener("click", function() {
    console.log("Hello world");
})

const btn = document.querySelector('#bouton');
const txt = document.querySelector('#texte');

btn.addEventListener("click", function() {
    btn.textContent = "Tu m'as cliqué.";
    txt.style.color = "#FF0000";
})

const btn2 = document.querySelector('#switch');
const txt2 = document.querySelector('#texte2');

btn2.addEventListener("click", function() {
    txt2.classList.toggle("colorRed");
})

// TABLEAU : représenté par [] => tableau commence par l'index 0
//              0          1        2
let prenom = ["pierre", "paul", "jacques"];

/*
// CONDITIONS : < > <= >= == != (if .. else ou if .. else if .. else)
const age = parseFloat(window.prompt("Quel âge avez-vous ?"));

if(age >=18) {
    console.log("Vous êtes majeur")
} else if(age > 60) {
    console.log("Vous êtes retraité(e)")
}
else {
    console.log("Vous êts mineur")
}
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------
/*

//L’objectif du programme est d’afficher un montant TTC après que l’utilisateur ait saisit un montant HT en partant du principe que la TVA est toujours à 20%.

//Les étapes :

// 1- demander à l’utilisateur le montant HT
let TVA = 20;
let nombreHT;
let nombreTTC;
let remise;
let remiseMontant;

nombreHT = parseFloat(window.prompt("Quelle est le montant HT ?"));

// 2- demander à l’utilisateur si il y a une remise (oui / o || non / n)
remise = window.prompt("Avez-vous une remise ? (oui/o ou non/n)");

if(remise ==="oui" || remise ==="o") {
    remiseMontant = parseFloat(window.prompt("Quel est le montant de la remise en € ?"));
    nombreHT = nombreHT - remiseMontant;
    document.write(`<p> ----------------- </p>`)
    document.write(`Grâce à votre remise de ${remiseMontant} €,
                    le nouveau prix HT est de ${nombreHT}€`);
} else if(remise ==="non" || remise ==="n") {
    console.log("pas de remise")
    document.write(`<p> ----------------- </p>`)
    document.write("Vous n'avez pas de remise.")
}
else {
    console.log("Vous jouez au Ni Oui Ni Non ?")
    document.write(`<p> ----------------- </p>`)
    document.write("Vous jouez au Ni Oui Ni Non ?")
}


    nombreTTC = nombreHT * (1 + (TVA / 100))
    document.write(`<p> ----------------- </p>`)
    document.write(`<p> Le montant HT est de : ${nombreHT} €</p>`);
    document.write(`<p> La TVA est de : ${TVA} % </p>`);
    document.write(`Le montant TTC est donc de : ${nombreTTC} €.`);
*/


/* -----------CORRECTION

 * L’objectif du programme est d’afficher un montant TTC après que l’utilisateur ait saisit un montant HT 
 * en partant du principe que la TVA est toujours à 20%
 * 
 * Les etapes : 
 * 1- demander à l’utilisateur le montant HT
 * 2- demander à l’utilisateur si il y a une remise (oui / o || non / n
 * 3- si oui :
    - demander à l’utilisateur le montant de la remise
    - faire la calcul avec le montant de la remise sur le prix HT- 
 * 4- calcul de la TVA : HT * (TVA/100)
 * 5- Calcul du montant TTC
 * 6- Affichage du résultat
 


// VARIABLES
let montantHT;
let remise;
let montantRemise;
const TVA = 20;
let montantTTC;

// CALCULS
montantHT = parseFloat(window.prompt("Saisir le montant HT"));
remise = window.prompt("Avez-vous une remise ? oui/o ou non/n");

if(remise == 'o' || remise == "oui") {
  montantRemise = parseFloat(window.prompt("Quel est le montant de votre remise ?"));
  montantHT = montantHT - montantRemise;
} 
montantTTC = montantHT * (1+(TVA / 100));

// AFFICHAGE
if(remise == "o" || remise == "oui") {
  document.write(`<p>Une remise de ${montantRemise}€ a été appliquée sur le montant HT soit un nouveau tarif de ${montantHT}€</p>`);
}

document.write(`Le montant TTC est de : ${montantTTC}€`);
*/


// ----------------------------------------------------------------------------------------------------------------------------------------------------


let chiffre1;
let chiffre2;
let operateur;
let resultat;

chiffre1 = parseFloat(window.prompt("Saisir la première valeur :"));

operateur = window.prompt("Saisir l'opérateur (+, -, x ou *, /):");

chiffre2 = parseFloat(window.prompt("Saisir la deuxième valeur :"));

if(operateur ==='+') {
    resultat = chiffre1 + chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi d'additionner ${chiffre1} et ${chiffre2}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);

} else if(operateur ==='-') {
    resultat = chiffre1 - chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi de soustraire ${chiffre2} à ${chiffre1}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);

} else if(operateur ==='x' || operateur ==='*') {
    resultat = chiffre1 * chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi de multiplier ${chiffre1} par ${chiffre2}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);

} else if(operateur ==='/' && chiffre2 !=0) {
    resultat = chiffre1 / chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi de diviser ${chiffre1} par ${chiffre2}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);

} else if(operateur ==='/' && chiffre2 ===0) {
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Nous ne pouvons pas effectuer cette division. </p>`);


} else {
    console.log("ERREUR")
    document.write(`<p> ----------------- </p>`)
    document.write("<p>Il y a une erreur dans vos réponses.</p>")
    document.write("<p>Veuillez recommencer en rafraîchissant la page.</p>")
}

/*
// OPTION AVEC SWITCH

switch(operateur) {
    case '+';
    resultat = chiffre1 + chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi d'additionner ${chiffre1} et ${chiffre2}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);
    
    break;

    case '-';
    resultat = chiffre1 - chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi de soustraire ${chiffre2} à ${chiffre1}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);
    
    break;

    case 'x';
    case '*';
    resultat = chiffre1 * chiffre2;
    document.write(`<p> ----------------- </p>`)
    document.write(`<p>Vous avez choisi de multiplier ${chiffre1} par ${chiffre2}.</p>`);    
    document.write(`<p>Le résultat est: ${resultat}</p>`);
    
    break;

    case '/';
    if(chiffre2 !=0) {
        resultat = chiffre1 / chiffre2;
        document.write(`<p> ----------------- </p>`)
        document.write(`<p>Vous avez choisi de diviser ${chiffre1} par ${chiffre2}.</p>`);    
        document.write(`<p>Le résultat est: ${resultat}</p>`);

    } else (chiffre2 ===0) {
        document.write(`<p> ----------------- </p>`)
        document.write(`<p>Nous ne pouvons pas effectuer cette division. </p>`);
    }
    break;

    default:
    resultat=null;
    document.write(`<p> ----------------- </p>`)
    document.write("<p>Il y a une erreur dans vos réponses.</p>")
    document.write("<p>Veuillez recommencer en rafraîchissant la page.</p>")


}

*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------


