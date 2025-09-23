document.addEventListener("DOMContentLoaded", () => {
    // Dynamique footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Dernière modification : ${document.lastModified}`;

    // Menu hamburger
    const menuButton = document.getElementById("menu");
    const navigation = document.querySelector(".navigation");
    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("show");
            menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
        });
    }

    const temples = [
        // tes données ici...
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
        },

        {
      templeName: "Benin City Nigeria",
      location: "Benin City, Nigeria",
      dedicated: "2025, May, 24",
      area: 30700,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg"
    },
    {
      templeName: "Dallas Texas",
      location: "Dallas Texas, United States",
      dedicated: "1984, October, 19-24",
      area: 44207,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Kowloon Tong, Kowloon City, Hong Kong",
      dedicated: "1996, May, 7-21",
      area: 51921,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
      templeName: "Kinshasa Democratic Republic Of The Congo",
      location: "Commune de Ngaliema, Kinshasa",
      dedicated: "2019, April, 14",
      area: 12000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    {
      templeName: "Idaho Falls Idaho",
      location: "Idaho Falls Idaho, United States",
      dedicated: "1945, September, 23-25",
      area: 85624,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-55801-main.jpg"
    }

    ];

    const container = document.getElementById("temples-container");

    // Fonction pour afficher les temples
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

    // Affiche tous les temples au départ
    displayTemples(temples);

    // Filtrage
    const dataFilterLinks = document.querySelectorAll("a[data-filter]");
    dataFilterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");
            filterTemples(filter);
        });
    });

    function filterTemples(filter) {
        let filteredTemples = temples;
        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 2000);
                break;
            case "new":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) >= 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.area > 50000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.area <= 50000);
                break;
        }
        displayTemples(filteredTemples);
    }
});
