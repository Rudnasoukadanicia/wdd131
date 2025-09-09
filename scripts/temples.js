// Menu hamburger and Dynamique footer
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Dernière modification : ${document.lastModified}`;

    const menuButton = document.getElementById("menu");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("show");
            menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
        });
    }
});
