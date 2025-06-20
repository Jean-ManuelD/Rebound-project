// Vérif console -> fichier js bien relié au html
console.log("coucou");

// Création bouton "Vers le haut"
// Récupérer l'élément dans le DOM
const toTop = document.querySelector("#toTop");
// Ajout évènement au clic puis remonter dans la page
toTop.addEventListener("click", () => {
 window.scrollTo({ top: 0, behavior: "smooth" });
});


// Création carrousel AVIS/TÉMOIGNAGES
// Création tableau d'avis
const avis = [
    {texte:` " Rebound, c’est ce que je cherchais sans le savoir. Du matos solide, stylé, et une vibe qui me rappelle les playgrounds de mon enfance. Respect. "`, auteur:"- Noah G., joueur semi-pro et créateur de contenu sportif."},
    {texte:` " Ils ont compris que le terrain, c’est pas juste du jeu. C’est un lien social. Et leurs produits respectent ça. "`, auteur:"- Samir B., Coach communautaire & Organisateur de tournois urbains."},
    {texte:` " J’organise mes sessions du week-end avec Rebound. Les terrains sont tops, bien placés, et surtout l’ambiance est toujours au rendez-vous. "`, auteur:"- Annaëlle M., Coach de basket amateur."},
];

// Initialisation index à 0
let indexAvis =0;

// Récupération DOM
const avisSection = document.querySelector(".avis_texte_auteur");
const texte = document.querySelector("#avisTexte");
const auteur = document.querySelector("#avisAuteur");
const avisPrev = document.querySelector("#avisPrev");
const avisNext = document.querySelector("#avisNext");

// Fonction d'affichage des avis
function afficherAvis() {

    avisSection.classList.add("fade-out");

  setTimeout(() => {
    texte.textContent = avis[indexAvis].texte;
    auteur.textContent = avis[indexAvis].auteur;

    // fade in
    avisSection.classList.remove("fade-out");
    avisSection.classList.add("fade-in");
  }, 250);

  // Retire fade-in après animation
  setTimeout(() => {
    avisSection.classList.remove("fade-in");
  }, 500);
}

// Event au clic sur précédent
avisPrev.addEventListener("click", () => {
    indexAvis = (indexAvis - 1 + avis.length) % avis.length
    afficherAvis();
});

// Event au clic sur suivant
avisNext.addEventListener("click", () => {
    indexAvis = (indexAvis + 1) % avis.length
    afficherAvis();
});

// Affichage
afficherAvis();
