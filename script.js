// Créer un événement au scroll
const nav = document.querySelector("#navbar");
const imgImpro = document.querySelector("#imgImprovise");
let playOnce = true;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    nav.style.height = "50px";
  } else {
    nav.style.height = "90px";
  }
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImpro.style.opacity = 1;
    imgImpro.style.transform = "none";
  }

  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
