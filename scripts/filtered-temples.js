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

    const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }];
    
    const container = document.getElementById("temples-container");
    temples.forEach((temple) => {
        const templeElement = document.createElement("div");
        templeElement.classList.add("temple");
        templeElement.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;
        container.appendChild(templeElement);

    });

    const dataFilterButtons = document.querySelectorAll("button[data-filter]");
    dataFilterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            filterTemples(filter);
        });
    });
    
    function displayTemples(templesArray) {
        container.innerHTML = "";
        templesArray.forEach((temple) => {
            const templeElement = document.createElement("div");
            templeElement.classList.add("temple");
            templeElement.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}">
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            `;
            container.appendChild(templeElement);
        });
    }

    

    function filterTemples(filter) {
        let filteredTemples = temples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year < 2000;
                });
                break;
            case "new":     
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year >= 2000;
                });
                break;
            
            case "large":
                filteredTemples = temples.filter(temple => temple.area > 50000);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area <= 50000);
                break;
            case "all":
                filteredTemples = temples;
                break;
            default:
                filteredTemples = temples;

        }

        displayTemples(filteredTemples);
    }


});
