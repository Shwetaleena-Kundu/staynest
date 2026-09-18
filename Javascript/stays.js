console.log("Staynest Stays JavaScript activated");

// ---------------- ELEMENTS ----------------

const currentYear = document.querySelector("#currentYear");

const staySearchForm = document.querySelector("#staySearchForm");
const destinationInput = document.querySelector("#destinationInput");
const checkInInput = document.querySelector("#checkInInput");
const checkOutInput = document.querySelector("#checkOutInput");

const propertyCards = document.querySelectorAll(".property-card");
const noResultsMessage = document.querySelector("#noResultsMessage");

const navbarSearchButton =
    document.querySelector(".navbar-search-btn");

const navbarSearchPanel =
    document.querySelector(".stays-nav-search-panel");

const navbarSearchInput =
    document.querySelector(".stays-nav-search-input");

const navbarSearchClose =
    document.querySelector(".stays-nav-search-close");

const categoryButtons =
    document.querySelectorAll(".stay-category-btn");

const sortStays = document.querySelector("#sortStays");
const staysGrid = document.querySelector("#staysGrid");

const viewButtons =
    document.querySelectorAll(".view-btn");

let selectedCategory = "all";


// ---------------- CURRENT YEAR ----------------

if (currentYear) {
    currentYear.innerText = new Date().getFullYear();
}


// ---------------- FILTER STAYS ----------------

const filterStays = () => {

    const searchTerm =
        destinationInput.value.trim().toLowerCase();

    let matchingStays = 0;

    propertyCards.forEach((card) => {

        const stayName =
            card.dataset.name.toLowerCase();

        const stayLocation =
            card.dataset.location.toLowerCase();

        const cardCategories =
            card.dataset.category.split(" ");

        const matchesSearch =
            stayName.includes(searchTerm) ||
            stayLocation.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategories.includes(selectedCategory);

        if (matchesSearch && matchesCategory) {
            card.style.display = "";
            matchingStays++;
        } else {
            card.style.display = "none";
        }
    });

    noResultsMessage.hidden = matchingStays !== 0;
};


// ---------------- MAIN SEARCH ----------------

staySearchForm.addEventListener("submit", (event) => {

    event.preventDefault();

    filterStays();

    document.querySelector("#featuredStays").scrollIntoView({
        behavior: "smooth"
    });
});


// ---------------- NAVBAR SEARCH ----------------

navbarSearchButton.addEventListener("click", () => {

    const panelIsOpen =
        navbarSearchPanel.classList.contains("active");

    if (!panelIsOpen) {

        navbarSearchPanel.classList.add("active");

        navbarSearchInput.focus();

        return;
    }

    const searchTerm =
        navbarSearchInput.value.trim();

    if (searchTerm === "") {

        navbarSearchInput.focus();

        return;
    }

    destinationInput.value = searchTerm;

    staySearchForm.requestSubmit();
});


// Press Enter to search

navbarSearchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        event.preventDefault();

        navbarSearchButton.click();
    }
});


// Close navbar search

navbarSearchClose.addEventListener("click", () => {

    navbarSearchPanel.classList.remove("active");

    navbarSearchInput.value = "";
});


// ---------------- HOMEPAGE SEARCH ----------------

const urlParameters =
    new URLSearchParams(window.location.search);

const homepageSearch =
    urlParameters.get("search");

if (homepageSearch) {

    destinationInput.value = homepageSearch;

    filterStays();
}


// ---------------- CATEGORY FILTER ----------------

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryButtons.forEach((categoryButton) => {

            categoryButton.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        filterStays();
    });
});


// ---------------- SORT STAYS ----------------

sortStays.addEventListener("change", () => {

    const selectedSort = sortStays.value;

    const sortedCards =
        Array.from(propertyCards);

    if (selectedSort === "price-low") {

        sortedCards.sort((firstCard, secondCard) => {

            return Number(firstCard.dataset.price) -
                   Number(secondCard.dataset.price);
        });
    }

    else if (selectedSort === "price-high") {

        sortedCards.sort((firstCard, secondCard) => {

            return Number(secondCard.dataset.price) -
                   Number(firstCard.dataset.price);
        });
    }

    else if (selectedSort === "rating") {

        sortedCards.sort((firstCard, secondCard) => {

            return Number(secondCard.dataset.rating) -
                   Number(firstCard.dataset.rating);
        });
    }

    sortedCards.forEach((card) => {

        staysGrid.append(card);
    });
});


// ---------------- GRID AND LIST VIEW ----------------

viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        viewButtons.forEach((viewButton) => {

            viewButton.classList.remove("active");
        });

        button.classList.add("active");

        const selectedView =
            button.dataset.view;

        if (selectedView === "list") {

            staysGrid.classList.add("list-view");

        } else {

            staysGrid.classList.remove("list-view");
        }
    });
});


// ---------------- WISHLIST BUTTONS ----------------

const wishlistButtons =
    document.querySelectorAll(".property-wishlist-btn");

wishlistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("saved");

        const heartIcon =
            button.querySelector("i");

        heartIcon.classList.toggle("fa-regular");

        heartIcon.classList.toggle("fa-solid");
    });
});


// ---------------- DATE VALIDATION ----------------

const today =
    new Date().toISOString().split("T")[0];

checkInInput.min = today;
checkOutInput.min = today;

checkInInput.addEventListener("change", () => {

    checkOutInput.min = checkInInput.value;

    if (
        checkOutInput.value &&
        checkOutInput.value < checkInInput.value
    ) {
        checkOutInput.value = "";
    }
});


// ---------------- NEWSLETTER ----------------

const newsletterForm =
    document.querySelector(".stays-newsletter-form");

const newsletterMessage =
    document.querySelector(".stays-newsletter-message");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    newsletterMessage.innerText =
        "Thank you! Travel inspiration is on its way.";

    newsletterForm.reset();
});
// ---------------- LOAD MORE STAYS ----------------

const loadMoreButton =
    document.querySelector("#loadMoreBtn");

let visibleStays = 6;

const showVisibleStays = () => {

    propertyCards.forEach((card, index) => {

        if (index < visibleStays) {

            card.style.display = "";

        } else {

            card.style.display = "none";
        }
    });

    if (visibleStays >= propertyCards.length) {

        loadMoreButton.style.display = "none";

    } else {

        loadMoreButton.style.display = "inline-flex";
    }
};

showVisibleStays();

loadMoreButton.addEventListener("click", () => {

    visibleStays = propertyCards.length;

    showVisibleStays();
});
// ---------------- RECENTLY VIEWED WISHLIST ----------------

const recentWishlistButtons =
    document.querySelectorAll(".recent-card button");

recentWishlistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("saved");

        const heartIcon =
            button.querySelector("i");

        heartIcon.classList.toggle("fa-regular");
        heartIcon.classList.toggle("fa-solid");
    });
});
// ---------------- NAVBAR WISHLIST ----------------

const navbarWishlistButton =
    document.querySelector(".navbar-wishlist-btn");

let showingSavedStays = false;

navbarWishlistButton.addEventListener("click", () => {

    showingSavedStays = !showingSavedStays;

    navbarWishlistButton.classList.toggle(
        "active",
        showingSavedStays
    );

    let savedStays = 0;

    if (showingSavedStays) {

        propertyCards.forEach((card) => {

            const wishlistButton =
                card.querySelector(".property-wishlist-btn");

            const isSaved =
                wishlistButton.classList.contains("saved");

            if (isSaved) {

                card.style.display = "";
                savedStays++;

            } else {

                card.style.display = "none";
            }
        });

        noResultsMessage.hidden = savedStays !== 0;

    } else {

        filterStays();
    }

    document.querySelector("#featuredStays").scrollIntoView({
        behavior: "smooth"
    });
});
// ---------------- INTERACTIVE MAP ----------------

const staysMapElement =
    document.querySelector("#staysMap");

const exploreMapButton =
    document.querySelector(".explore-map-btn");

const staysMap =
    L.map(staysMapElement).setView([20, 45], 2);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(staysMap);


// Property locations

const mapLocations = [

    {
        name: "The Oceanview Villa",
        location: "Bali, Indonesia",
        coordinates: [-8.4095, 115.1889]
    },

    {
        name: "Snowpeak Cottage",
        location: "Manali, India",
        coordinates: [32.2432, 77.1892]
    },

    {
        name: "Caldera Sunset Suite",
        location: "Santorini, Greece",
        coordinates: [36.3932, 25.4615]
    },

    {
        name: "Lagoon Water Villa",
        location: "Maldives",
        coordinates: [3.2028, 73.2207]
    },

    {
        name: "Skyline Apartment",
        location: "Dubai, UAE",
        coordinates: [25.2048, 55.2708]
    },

    {
        name: "Parisian Loft",
        location: "Paris, France",
        coordinates: [48.8566, 2.3522]
    }
];


// Add markers to the map

const mapMarkers = [];

mapLocations.forEach((stay) => {

    const marker =
        L.marker(stay.coordinates).addTo(staysMap);

    marker.bindPopup(`
        <strong>${stay.name}</strong><br>
        ${stay.location}
    `);

    mapMarkers.push(marker);
});


// Show all markers when the button is clicked

exploreMapButton.addEventListener("click", () => {

    const markerGroup =
        L.featureGroup(mapMarkers);

    staysMap.fitBounds(markerGroup.getBounds(), {
        padding: [30, 30]
    });
});