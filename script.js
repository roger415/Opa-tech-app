// Action sur le bouton "Commencer"
document.getElementById("start-btn").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
