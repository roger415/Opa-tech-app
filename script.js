// Liste des produits OPA.Luxury (à remplacer par tes images)
const products = [
    { name: "Lampe Design 1", image: "images/lamp1.jpg" },
    { name: "Lampe Design 2", image: "images/lamp2.jpg" },
    { name: "Lampe Design 3", image: "images/lamp3.jpg" },
    { name: "Lampe Design 4", image: "images/lamp4.jpg" },
    { name: "Lampe Design 5", image: "images/lamp5.jpg" },
];

// Chargement de la galerie de produits
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;
        gallery.appendChild(productCard);
    });
});