document.addEventListener("DOMContentLoaded", () => {
    // Récupérer le compteur depuis localStorage, ou initialiser à 0
    let reviewCount = localStorage.getItem("reviewCount");
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    // Incrémenter le compteur à chaque chargement de review.html
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // Créer un élément pour afficher le compteur
    const counterDisplay = document.createElement("p");
    counterDisplay.textContent = `Total number of reviews submitted: ${reviewCount}`;
    counterDisplay.style.fontWeight = "bold";
    counterDisplay.style.textAlign = "center";
    counterDisplay.style.marginTop = "1rem";

    // Ajouter le compteur à la page (avant le footer ou dans un container)
    document.body.insertBefore(counterDisplay, document.querySelector("footer"));
});