// Fonction pour naviguer entre les sections (futur développement)
function navigateTo(section) {
    alert("Vous avez cliqué sur : " + section);
}

// Fonction pour faire défiler jusqu'à la section principale
function scrollToSection() {
    window.scrollTo({
        top: document.querySelector('main').offsetTop,
        behavior: 'smooth'
    });
}