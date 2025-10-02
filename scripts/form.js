document.addEventListener("DOMContentLoaded", () => {
    // Dynamique footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Dernière modification : ${document.lastModified}`;
    const products = ["Laptop", "Smartphone", "Headphones", "Smartwatch"];
    const select = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.toLowerCase();
        option.textContent = product;
        select.appendChild(option)
    });
});